<?php

namespace App\Filament\Pages;

use App\Models\Facility;
use App\Models\User;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Pages\Tenancy\RegisterTenant;

class RegisterFacility extends RegisterTenant
{
    public static function getLabel(): string
    {
        return 'Register team';
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name'),
                // ...
            ]);
    }

    protected function handleRegistration(array $data): Facility
    {
        /** @var User $user */
        $user = auth()->user();

        $facility = Facility::create([
            ...$data,
            'user_id' => $user->id
        ]);

        $user->facilities()->attach($facility);

        return $facility;
    }
}
