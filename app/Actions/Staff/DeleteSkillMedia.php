<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DeleteSkillMedia
{
    public function __invoke(Media $media): RedirectResponse
    {
        $media->delete();

        return Redirect::route('staff.profile.edit');
    }
}
