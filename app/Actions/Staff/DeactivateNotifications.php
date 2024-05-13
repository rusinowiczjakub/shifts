<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;
use Illuminate\Http\RedirectResponse;

class DeactivateNotifications
{
    public function __invoke(): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $user->update([
            'active_notifications' => false
        ]);

        return redirect()->back();
    }
}
