<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\Models\User;
use App\Models\VerificationCode;
use App\Rules\VerifyCode;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class VerifyEmail
{
    public function __invoke(
        Request $request
    ): RedirectResponse
    {
        /** @var User $user */
        $user = Auth::user();

        $request->validate([
            'code' => ['required', 'min:4', 'max:4', new VerifyCode($user->email)]
        ]);

        /** @var VerificationCode $verificationCode */
        $verificationCode = VerificationCode::where([
            'email' => $user->email,
        ])->first();

        if ($verificationCode->isExpired()) {
            return Redirect::route('staff.verify-email.page', [])->with('message', trans('message.error'));;
        }

        if (!$verificationCode->isValid($request->code)) {
            return Redirect::route('staff.verify-email.page', [])->with('message', trans('message.error'));
        }

        $user->markEmailAsVerified();
        $verificationCode->delete();

        if ($redirectTo = $request->query->get('redirectTo')) {
            return Redirect::to($redirectTo);
        }

        return Redirect::route('staff.wizzard.step-1');
    }
}
