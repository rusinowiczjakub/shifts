<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Models\Application;
use App\Models\MedicalStaff;
use App\Models\Shift;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Apply
{
    public function __invoke(Shift $shift, Request $request): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = auth()->user();

        $existingApplication = Application::where([
            ['shift_id', $shift->id],
            ['medical_staff_id', $user->profile->id]
        ])->first();

        if ($existingApplication) {
            return redirect()->back()->with([
                'message' => 'Już aplikowałeś na tą zmianę',
                'status' => 'warning'
            ]);
        }

        $overlappingApplications = Application::with(['shift', 'medicalStaff'])
            ->where('medical_staff_id', $user->profile->id)
            ->whereHas('shift', function (Builder $query) use ($shift) {
                $query->where('shift_id', $shift->id)
                    ->orWhere(function ($query) use ($shift) {
                        $query->where('start_date', '<=', function ($query) use ($shift) {
                            $query->from('shifts')->select('end_date')->where('id', $shift->id);
                        })
                            ->where('end_date', '>=', function ($query) use ($shift) {
                                $query->from('shifts')->select('start_date')->where('id', $shift->id);
                            });
                    });
            })
            ->where('status', [Application::STATUS_ACCEPTED])
            ->count();

        if ($overlappingApplications > 0) {
            return redirect()->back()->with([
                'message' => 'Aplikowałeś już na zmianę, która odbywa się w tym czasie.',
                'status' => 'warning'
            ]);
        }

        $applicationsCount = $shift->applications()->whereIn(
            'status', [Application::STATUS_ACCEPTED]
        )->count();

        if ($shift->available_slots <= $applicationsCount) {
            return redirect()->back()->with([
                'message' => 'Ilość miejsc na tą zmianę została wyczerpana.',
                'status' => 'warning'
            ]);
        }

        Application::create([
            'medical_staff_id' => $user->profile->id,
            'shift_id' => $shift->id
        ]);

        return redirect()->back()->with([
            'message' => 'Dziękujemy za aplikowanie. Skontaktujemy się z Tobą gdy placówka zaakceptuje Twoje zgłoszenie.',
            'status' => 'success'
        ]);
    }
}
