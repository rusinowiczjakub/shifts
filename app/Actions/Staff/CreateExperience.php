<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\CreateExperienceRequest;
use App\Models\JobExperience;
use App\Models\MedicalStaff;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CreateExperience
{
    public function __invoke(CreateExperienceRequest $request): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = auth()->user();

        JobExperience::create([
            'company' => $request->company,
            'period_start' => Carbon::createFromTimestamp($request->period_start)->setTimezone(
                'Europe/Warsaw'
            ),
            'period_end' => $request->period_end ? Carbon::createFromTimestamp($request->period_end)->setTimezone(
                'Europe/Warsaw'
            ) : null,
            'description' => $request->description,
            'medical_staff_id' => $user->profile->id
        ]);

        return Redirect::route('staff.profile.edit');
    }
}
