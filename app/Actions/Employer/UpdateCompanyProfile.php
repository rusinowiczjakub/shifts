<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Http\Requests\Employer\UpdateCompanyProfileRequest;
use App\Models\Address;
use App\Models\Facility;
use App\Models\User;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class UpdateCompanyProfile
{
    public function __construct(
        private readonly AuthManager $authManager
    ) {
    }

    public function __invoke(UpdateCompanyProfileRequest $request): RedirectResponse
    {
        /** @var User $user */
        $user = $this->authManager->user();
        /** @var Facility $institution */
        $institution = $user->institution;


        $institution->fill(
            $request->getInstitutionValues()
        );

        /** @var Address $institutionAddress */
        $institutionAddress = $institution->address;

        $institutionAddress->fill([
            $request->getAddressValues()
        ]);

        $institution->save();
        $institutionAddress->save();

        return Redirect::route('settings.index')->with('message', trans('message.saved'));
    }
}
