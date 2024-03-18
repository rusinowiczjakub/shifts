<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\JobExperience;
use App\Models\MedicalStaff;
use Illuminate\Support\Facades\Redirect;

class DeleteExperience
{
    public function __invoke(JobExperience $experience)
    {
        /** @var MedicalStaff $user */
        $user = auth()->user();

        if ($user->profile->id !== $experience->medical_staff_id) {
            return Redirect::route('staff.profile.edit');
        }

        $experience->delete();

        return Redirect::route('staff.profile.edit');
    }
}
