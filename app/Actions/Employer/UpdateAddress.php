<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Http\Requests\Employer\UpdateAddressRequest;
use App\Models\Address;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateAddress
{
    public function __construct(
        private readonly AuthManager $authManager
    ) {
    }

    public function __invoke(UpdateAddressRequest $request, Address $address): RedirectResponse
    {
        $address->fill(
            $request->all()
        );

        $address->save();

        return Redirect::route('settings.index', ['']);
    }
}
