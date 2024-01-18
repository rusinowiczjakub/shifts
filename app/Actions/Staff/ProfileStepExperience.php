<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use Inertia\Inertia;
use Inertia\Response;

class ProfileStepExperience
{
    public function __invoke(): Response
    {
        return Inertia::render('Staff/Wizard/AddExperience');
    }
}
