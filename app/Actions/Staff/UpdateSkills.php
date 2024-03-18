<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\UpdateSkillsRequest;
use App\Models\MedicalStaff;
use App\Models\Skill;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Ramsey\Uuid\Uuid;

class UpdateSkills
{
    public function __construct(
        private readonly AuthManager $authManager
    )
    {
    }

    public function __invoke(UpdateSkillsRequest $request): RedirectResponse
    {
        /** @var MedicalStaff $user */
        $user = $this->authManager->user();

        /** @var Skill $skill */
        $skill = $user->profile->skills()->create([
            'name' => $request->name,
            'description' => $request->description,
            'medical_staff_id' => $user->profile->id
        ]);

        if ($request->file('files')) {
            $skill
                ->addMedia($request->file('files'))
                ->usingFileName(Uuid::uuid4()->toString())
                ->toMediaCollection('skills', 'media');
        }

        return Redirect::route('staff.profile.edit');
    }
}
