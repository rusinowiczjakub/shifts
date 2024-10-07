<?php

declare(strict_types=1);

namespace MedShifts\JobScrapper\RocketJobs\Scrapper;

use GuzzleHttp\Client;
use Psr\Http\Message\ResponseInterface;

class Scrapper
{
    const JOB_BOARD_NAME = 'rocketjobs.pl';
    const HTTP_USER_AGENT = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0';
    private const BASE_URL = 'https://api.rocketjobs.pl';
    private const JOB_BOARD_URL = 'https://rocketjobs.pl';
    private const OFFER_BASE_URL = 'https://rocketjobs.pl/oferta/';
    private const OFFERS_JSON_URL = '/v2/user-panel/offers';
    private const LISTING_KEY = 'slug';
    private const EXPERIENCE_LEVEL_KEY = 'experienceLevel';
    private const COMPANY_KEY = 'companyName';
    private const CITY_KEY = 'city';
    private const TITLE_KEY = 'title';
    private const PUBLISHED_AT_KEY = 'publishedAt';
    private const JS_DATA_PATTERN_MATCH = '/<script\s+id="__NEXT_DATA__"\s+type="application\/json">([^<]+)<\/script>/';
    private const REQUEST_OPTIONS = [
        'headers' => [
            'Version' => 2,
            'Dnt' => 1,
            'Accept' => 'application/json',
            'Accept-Language' => 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
            'Origin' => 'https://rocketjobs.pl',
            'Referer' => 'https://rocketjobs.pl/',
            'User-Agent' => self::HTTP_USER_AGENT
        ]
    ];
    protected const MAX_PAGE_LIMIT = 100;

    public function execute(): array
    {
        $client = new Client();

        /** @var ResponseInterface $response */
        $response = retry(
            5,
            fn () => $client->get(
                self::BASE_URL . self::OFFERS_JSON_URL . '?&page=1&sortBy=published&orderBy=DESC&perPage=100', self::REQUEST_OPTIONS,
            ),
            3000
        );

        $body = json_decode($response->getBody()->getContents(), true);

        $offers = $body['data'];
        $meta = $body['meta'];

        $results = [
            ...$offers
        ];

        if ($meta['totalPages'] > 1) {
            for ($i = 2; $i <= min($meta['totalPages'], self::MAX_PAGE_LIMIT); $i++) {
                $response = retry(
                    5,
                    fn () => $client->get(self::BASE_URL . self::OFFERS_JSON_URL . '?&page=' . $i . '&sortBy=published&orderBy=DESC&perPage=100',self::REQUEST_OPTIONS),
                3000
            );


                $body = json_decode($response->getBody(), true);

                $offers = $body['data'];

                $results = [
                    ...$offers,
                    ...$results
                ];

                sleep(3);
            }
        }

        return $results;
    }
}
