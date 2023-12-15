<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Models\Enums\UserType;
use App\Models\Institution;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;

class Register
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        /** @var User $user */
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => UserType::EMPLOYER->value
        ]);

        /** @var Institution $institution */
        $institution = $user->institution()->create();
        $institution->address()->create([
            'is_default' => true
        ]);

        event(new Registered($user));

        Auth::login($user);

        return Redirect::route('employer.dashboard');
    }
}
