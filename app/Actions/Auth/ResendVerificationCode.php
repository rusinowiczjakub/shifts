<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ResendVerificationCode
{
    public function __invoke(Request $request): RedirectResponse
    {
        /** @var User $user */
        $user = Auth::user();

        $user->sendEmailVerificationNotification();

        return Redirect::route('staff.verify-email');
    }
}
