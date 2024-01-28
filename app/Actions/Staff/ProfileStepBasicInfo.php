<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileStepBasicInfo
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Staff/Wizard/AddBasicInfo', []);
    }
}
