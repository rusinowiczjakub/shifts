<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Http\Requests\Employer\UpdateAddressRequest;
use App\Models\Facility;
use App\Models\User;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CreateAddress
{
    public function __construct(
        private readonly AuthManager $authManager
    ) {
    }

    public function __invoke(UpdateAddressRequest $request): RedirectResponse
    {
        /** @var User $user */
        $user = $this->authManager->user();
        /** @var Facility $institution */
        $institution = $user->institution;

        $institution->addresses()->create(
            $request->all()
        );

        return Redirect::route('settings.index');
    }
}
