<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Http\Requests\UpdateSkillsRequest;
use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Ramsey\Uuid\Uuid;

class UpdateSkill
{
    public function __invoke(Skill $skill, UpdateSkillsRequest $request): RedirectResponse
    {
        $skill->update([
            'name' => $request->name,
            'description' => $request->description
        ]);

        $skill->clearMediaCollection('skills');

        if ($request->file('files')) {
            $skill
                ->addMedia($request->file('files'))
                ->toMediaCollection('skills', 'media');
        }

        return Redirect::route('staff.profile.edit');
    }
}
