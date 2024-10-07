<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Models\Facility;
use App\Models\ProfessionalType;
use Inertia\Inertia;
use Inertia\Response;

class ShiftRequestForm
{
    public function __invoke(string $token): Response
    {
        /** @var Facility $institution */
        $institution = Facility::with(['addresses'])->where('token', $token)->firstOrFail();

        return Inertia::render(
            'Employer/MVP/ShiftRequestForm',
            [
                'addresses' => $institution->addresses,
                'professionalTypes' => ProfessionalType::all(),
                'token' => $token
            ]
        );
    }
}
