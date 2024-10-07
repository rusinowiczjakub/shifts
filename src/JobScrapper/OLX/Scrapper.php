<?php

declare(strict_types=1);

namespace MedShifts\JobScrapper\OLX;

use App\Models\ExternalJob;
use Carbon\Carbon;
use GuzzleHttp\Client;

class Scrapper
{
    const REGIONS = [
        //["id" => 3, "name" => "Dolnośląskie", "normalized_name" => "dolnoslaskie"],
        //[
        //    "id" => 15,
        //    "name" => "Kujawsko-pomorskie",
        //    "normalized_name" => "kujawsko-pomorskie",
        //],
        //["id" => 8, "name" => "Lubelskie", "normalized_name" => "lubelskie"],
        //["id" => 9, "name" => "Lubuskie", "normalized_name" => "lubuskie"],
        //["id" => 7, "name" => "Łódzkie", "normalized_name" => "lodzkie"],
        //["id" => 4, "name" => "Małopolskie", "normalized_name" => "malopolskie"],
        ["id" => 2, "name" => "Mazowieckie", "normalized_name" => "mazowieckie"],
        //["id" => 12, "name" => "Opolskie", "normalized_name" => "opolskie"],
        //["id" => 17, "name" => "Podkarpackie", "normalized_name" => "podkarpackie"],
        //["id" => 18, "name" => "Podlaskie", "normalized_name" => "podlaskie"],
        //["id" => 5, "name" => "Pomorskie", "normalized_name" => "pomorskie"],
        //["id" => 6, "name" => "Śląskie", "normalized_name" => "slaskie"],
        //[
        //    "id" => 13,
        //    "name" => "Świętokrzyskie",
        //    "normalized_name" => "swietokrzyskie",
        //],
        //[
        //    "id" => 14,
        //    "name" => "Warmińsko-mazurskie",
        //    "normalized_name" => "warminsko-mazurskie",
        //],
        //[
        //    "id" => 1,
        //    "name" => "Wielkopolskie",
        //    "normalized_name" => "wielkopolskie",
        //],
        //[
        //    "id" => 11,
        //    "name" => "Zachodniopomorskie",
        //    "normalized_name" => "zachodniopomorskie",
        //],
    ];

    const CATEGORY = 1868;
    const HTTP_USER_AGENT = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0';

    public function execute(): array
    {
        $client = new Client();

        $category = self::CATEGORY;

        $offers = [];

        foreach (self::REGIONS as $region) {
            $fetchUrl = "https://m.olx.pl/api/v1/offers/?offset=0&limit=10&category_id=$category&region_id={$region['id']}";

            do {
                $response = json_decode($client->request(
                    'GET',
                    $fetchUrl,
                    [
                        'headers' => [
                            'User-Agent' => self::HTTP_USER_AGENT,
                        ],
                    ]
                )->getBody()->getContents(), true);

                $offers = [
                    ...$offers,
                    ...collect($response['data'])->map(function (array $data) {
                        $salary = collect($data['params'])->filter(
                            fn(array $params) => $params['key'] === 'salary'
                        )->first() ?? [];
                        $contractType = collect($data['params'])->filter(
                            fn(array $params) => $params['key'] === 'agreement'
                        )->first() ?? [];
                        $jobType = collect($data['params'])->filter(
                            fn(array $params) => $params['key'] === 'type'
                        )->first() ?? [];

                        $offer = new ExternalJob();
                        $offer->external_id = $data['id'];
                        $offer->title = $data['title'] ?? null;
                        $offer->link = $data['url'] ?? null;
                        $offer->location = $data['location']['city']['name'] ?? null;
                        $offer->region = $data['location']['region']['name'] ?? null;
                        $offer->employer = $data['user']['company_name'] ?? null;
                        $offer->description = $data['description'] ?? null;
                        $offer->job_type = $jobType['value']['key'] ?? null;
                        $offer->rate = $salary
                            ? $salary['value']['from'] ?? null . ' - ' . $salary['value']['to'] ?? null
                            : null;
                        $offer->rate_type = $salary['value']['type'] ?? null;
                        $offer->contract_type = $contractType['value']['label'] ?? null;
                        $offer->valid_to = isset($data['valid_to_time'])
                            ? Carbon::parse($data['valid_to_time'])
                            : null;
                        $offer->published_at = isset($data['created_time'])
                            ? Carbon::parse($data['created_time'])
                            : null;

                        return $offer;
                    })
                ];

                $fetchUrl = $response['links']['next']['href'] ?? null;

                sleep(3);
            } while ($fetchUrl !== null);

            sleep(3);
        }

        return $offers;
    }
}
