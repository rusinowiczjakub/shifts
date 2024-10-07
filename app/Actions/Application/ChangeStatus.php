<?php

declare(strict_types=1);

namespace App\Actions\Application;

use App\Models\Application;
use App\Models\Facility;
use App\Models\Shift;
use App\Models\User;
use App\Notifications\ApplicationStatusChanged;
use Illuminate\Http\RedirectResponse;

class ChangeStatus
{
    public function __invoke(string $token, Application $application, string $status): RedirectResponse
    {
        $institution = Facility::where('token', $token)->first();

        /** @var Shift $shift */
        $shift = $application->shift;

        if ($shift->institution->id !== $institution->id) {
            abort(403);
        }

        $application->update([
            'status' => $status
        ]);

        /** @var User $user */
        $user = $application->medicalStaff->user;
        $user->notify(new ApplicationStatusChanged($application));

        return redirect()->back()->with([
            'message' => 'Zmieniono status aplikacji.'
        ]);
    }
}
