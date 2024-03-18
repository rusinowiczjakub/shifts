<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\Staff\UpdateProfessionalTypesRequest;
use App\Models\MedicalStaff;
use Exception;
use Illuminate\Support\Facades\Redirect;

class UpdateProfileProfessionalTypes {
    public function __invoke(UpdateProfessionalTypesRequest $request)
    {
        $user = auth()->user();

        if (!$user instanceof MedicalStaff) {
            throw new Exception(); //@TODO: Custom exception
        }

        $user->profile->professionalTypes()->sync(
            $request->professionalTypes
        );

        return Redirect::route('staff.profile.edit');
    }
}
