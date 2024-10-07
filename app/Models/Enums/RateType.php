<?php

declare(strict_types=1);

namespace App\Models\Enums;

enum RateType: string
{
    case MONTHLY = 'monthly';
    case DAILY = 'daily';
    case HOURLY = 'hourly';
}
