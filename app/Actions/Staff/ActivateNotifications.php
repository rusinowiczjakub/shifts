<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;
use Illuminate\Http\RedirectResponse;

class ActivateNotifications
{
    public function __invoke(): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $user->update([
            'active_notifications' => true
        ]);

        return redirect()->back();
    }
}
