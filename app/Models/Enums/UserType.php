<?php

declare(strict_types=1);

namespace App\Models\Enums;

enum UserType: string
{
    case EMPLOYER = 'EMPLOYER';
    case MEDICAL_STAFF = 'MEDICAL_STAFF';
}
