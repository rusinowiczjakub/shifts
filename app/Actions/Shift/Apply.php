<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Models\Application;
use App\Models\MedicalStaff;
use App\Models\Shift;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Apply
{
    public function __invoke(Shift $shift, Request $request): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = auth()->user();

        Application::create([
            'medical_staff_id' => $user->profile->id,
            'shift_id' => $shift
        ]);

        return redirect()->back();
    }
}
