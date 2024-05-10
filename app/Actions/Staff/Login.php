<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\Auth\LoginStaffRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class Login
{
    public function __invoke(LoginStaffRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        if ($redirectTo = $request->query('redirectTo')) {
            return Redirect::to($redirectTo);
        }

        return Redirect::route('staff.dashboard');
    }
}
