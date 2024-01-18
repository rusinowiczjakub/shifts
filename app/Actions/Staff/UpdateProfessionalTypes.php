<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\Staff\UpdateProfessionalTypesRequest;
use App\Models\MedicalStaff;
use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class UpdateProfessionalTypes
{
    public function __construct(
        private readonly AuthManager $auth
    ) {
    }

    public function __invoke(UpdateProfessionalTypesRequest $request): RedirectResponse
    {
        $user = $this->auth->user();

        if (!$user instanceof MedicalStaff) {
            throw new Exception(); //@TODO: Custom exception
        }

        $user->profile->professionalTypes()->sync(
            $request->professionalTypes
        );

        return Redirect::route('staff.wizzard.step-2');
    }
}
