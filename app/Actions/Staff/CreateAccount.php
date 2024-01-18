<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\Staff\CreateAccountRequest;
use App\Models\MedicalStaff;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class CreateAccount
{
    public function __invoke(CreateAccountRequest $request): RedirectResponse
    {
        /** @var MedicalStaff $staff */
        $staff = MedicalStaff::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $staff->profile()->create([
            'user_id' => $staff->id
        ]);

        Auth::login($staff);

        return Redirect::route('staff.wizzard.step-1');
    }
}
