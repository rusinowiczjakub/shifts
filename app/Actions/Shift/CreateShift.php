<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Http\Requests\Shift\CreateShiftRequest;
use App\Models\Shift;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CreateShift
{
    public function __invoke(CreateShiftRequest $request): RedirectResponse
    {
        Shift::create(
            $request->validated()
        );

        return Redirect::route('shift.list');
    }
}
