<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\CreateExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Models\JobExperience;
use App\Models\MedicalStaff;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateExperience
{
    public function __invoke(UpdateExperienceRequest $request, JobExperience $experience): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = auth()->user();

        if ($user->profile->id !== $experience->medical_staff_id) {
            return Redirect::route('staff.profile.edit');
        }

        $experience->update([
            'company' => $request->company,
            'period_start' => Carbon::createFromTimestamp($request->period_start)->setTimezone(
                'Europe/Warsaw'
            ),
            'period_end' => $request->period_end ? Carbon::createFromTimestamp($request->period_end)->setTimezone(
                'Europe/Warsaw'
            ) : null,
            'description' => $request->description,
        ]);

        return Redirect::route('staff.profile.edit');
    }
}
