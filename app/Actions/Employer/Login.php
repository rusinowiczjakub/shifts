<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class Login
{
    /**
     * Handle an incoming authentication request.
     */
    public function __invoke(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return Redirect::route('employer.dashboard');
    }
}
