<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Http\Requests\Shift\CreateShiftRequest;
use App\Models\Facility;
use App\Models\Shift;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CreateShift
{
    public function __invoke(string $token, CreateShiftRequest $request): RedirectResponse
    {
        /** @var Facility $institution */
        $institution = Facility::with(['addresses'])->where('token', $token)->firstOrFail();

        Shift::create([
            ...$request->validated(),
            'institution_id' => $institution->id
        ]);

        return Redirect::route('employer.shift-request', ['token' => $token]);
    }
}
