<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\ProfessionalType;
use Inertia\Inertia;
use Inertia\Response;

class ProfileStepProfessionalTypes
{
    public function __invoke(): Response
    {
        return Inertia::render('Staff/Wizard/AddProfessionalTypes', [
            'professionalTypes' => ProfessionalType::all()
        ]);
    }
}
