<?php

declare(strict_types=1);

namespace App\Actions\Utils;

use App\Models\GeoCity;
use App\Models\GeoCommunity;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetCities
{
    public function __invoke(Request $request): JsonResponse
    {
        $cityName = $request->cityName ?? '';

        return new JsonResponse(
            $cityName
                ? GeoCommunity::with('province')->where('name', 'like', $cityName . '%')->limit(10)->get()
                : []
        );
    }
}
