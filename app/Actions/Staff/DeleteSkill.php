<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class DeleteSkill
{
    public function __invoke(Skill $skill): RedirectResponse
    {
        $skill->delete();

        return Redirect::route('staff.profile.edit');
    }
}
