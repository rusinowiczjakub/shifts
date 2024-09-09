<?php

declare(strict_types=1);

namespace MedShifts\JobScrapper\OLX;

use GuzzleHttp\Client;

class Scrapper
{
    const REGIONS = [
        ["id" => 3, "name" => "Dolnośląskie", "normalized_name" => "dolnoslaskie"],
        [
            "id" => 15,
            "name" => "Kujawsko-pomorskie",
            "normalized_name" => "kujawsko-pomorskie",
        ],
        ["id" => 8, "name" => "Lubelskie", "normalized_name" => "lubelskie"],
        ["id" => 9, "name" => "Lubuskie", "normalized_name" => "lubuskie"],
        ["id" => 7, "name" => "Łódzkie", "normalized_name" => "lodzkie"],
        ["id" => 4, "name" => "Małopolskie", "normalized_name" => "malopolskie"],
        ["id" => 2, "name" => "Mazowieckie", "normalized_name" => "mazowieckie"],
        ["id" => 12, "name" => "Opolskie", "normalized_name" => "opolskie"],
        ["id" => 17, "name" => "Podkarpackie", "normalized_name" => "podkarpackie"],
        ["id" => 18, "name" => "Podlaskie", "normalized_name" => "podlaskie"],
        ["id" => 5, "name" => "Pomorskie", "normalized_name" => "pomorskie"],
        ["id" => 6, "name" => "Śląskie", "normalized_name" => "slaskie"],
        [
            "id" => 13,
            "name" => "Świętokrzyskie",
            "normalized_name" => "swietokrzyskie",
        ],
        [
            "id" => 14,
            "name" => "Warmińsko-mazurskie",
            "normalized_name" => "warminsko-mazurskie",
        ],
        [
            "id" => 1,
            "name" => "Wielkopolskie",
            "normalized_name" => "wielkopolskie",
        ],
        [
            "id" => 11,
            "name" => "Zachodniopomorskie",
            "normalized_name" => "zachodniopomorskie",
        ],
    ];

    const CATEGORY = 1868;
    const HTTP_USER_AGENT = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0';

    public function execute(): void
    {

        $client = new Client();

        $category = self::CATEGORY;

        foreach (self::REGIONS as $region) {
            dd(json_decode($client->request(
                'GET',
                "https://m.olx.pl/api/v1/offers/?offset=0&limit=10&category_id=$category&region_id=17",
                [
                    'headers' => [
                        'User-Agent' => self::HTTP_USER_AGENT
                    ]
                ]
            )->getBody()->getContents()));

            sleep(3);
        }
    }
}
