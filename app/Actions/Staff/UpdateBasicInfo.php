<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\Staff\UpdateBasicInfoRequest;
use App\Models\MedicalStaff;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateBasicInfo
{
    public function __construct(
        private readonly AuthManager $authManager
    )
    {
    }

    public function __invoke(UpdateBasicInfoRequest $request): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = $this->authManager->user();

        $user->update(['name' => $request->name]);
        $user->profile->city()->associate($request->city);
        $user->profile->update(['bio' => $request->bio]);

        return Redirect::route('staff.profile.edit');
    }
}
