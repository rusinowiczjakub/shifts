<?php

declare(strict_types=1);

namespace App\Models\Enums;

enum ContractType: string
{
    case SELF_EMPLOYMENT = 'self_employment';
    case EMPLOYMENT_CONTRACT = 'employment_contract';
    case CONTRACT_OF_MANDATE = 'Contract of Mandate';
}
