<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Models\Application;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationPreview
{
    public function __invoke(
        string $token,
        Application $application
    ): Response
    {
        $application->load(['medicalStaff', 'medicalStaff.user', 'medicalStaff.professionalTypes', 'medicalStaff.experiences', 'medicalStaff.skills']);

        return Inertia::render(
            'Employer/MVP/ProfilePreview',
            [
                'application' => $application
            ]
        );
    }
}
