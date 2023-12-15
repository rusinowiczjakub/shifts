<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use Illuminate\Auth\AuthManager;
use Inertia\Inertia;
use Inertia\Response;

class Settings
{
    public function __construct(
        private readonly AuthManager $auth
    ) {
    }

    public function __invoke(): Response
    {
        return Inertia::render('Employer/Settings/Settings', [
            'institution' => $this->auth->user()->institution()->with('address', 'addresses')->first(),
        ]);
    }
}
