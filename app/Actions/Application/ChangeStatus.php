<?php

declare(strict_types=1);

namespace App\Actions\Application;

use App\Models\Application;
use App\Models\Institution;
use App\Models\Shift;
use Illuminate\Http\RedirectResponse;

class ChangeStatus
{
    public function __invoke(string $token, Application $application, string $status): RedirectResponse
    {
        $institution = Institution::where('token', $token)->first();

        /** @var Shift $shift */
        $shift = $application->shift;

        if ($shift->institution->id !== $institution->id) {
            abort(403);
        }

        $application->update([
            'status' => $status
        ]);

        return redirect()->back()->with([
            'message' => 'Zmieniono status aplikacji.'
        ]);
    }
}
