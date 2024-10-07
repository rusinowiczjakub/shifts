<?php

namespace App\Filament\Pages;

use App\Models\Address;
use App\Models\Facility;
use App\Models\GeoCommunity;
use Filament\Actions\Action;
use Filament\Facades\Filament;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Enums\Alignment;
use Illuminate\Validation\ValidationException;

class Settings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-cog';

    protected static string $view = 'filament.pages.settings';

    public ?array $data = [];

    protected static ?int $navigationSort = 99;

    public function mount(): void
    {
        $tenant = Filament::getTenant();
        /** @var Address $address */
        $address = $tenant->address;

        $this->form->fill([
            'address' => $address?->attributesToArray() ?? [],
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make(__('forms.address.title'))
                    ->description(__('forms.address.description'))
                    ->aside()
                    ->schema([
                        Select::make('address.city')
                            ->label(__('forms.address.city'))
                            ->options(
                                GeoCommunity::with('province')
                                    ->get()
                                    ->map(fn(GeoCommunity $geoCommunity) => [
                                        'label' => $geoCommunity->name . ', ' . $geoCommunity->province->name,
                                        'name' => $geoCommunity->name,
                                    ])
                                    ->pluck('label', 'name')
                            )
                            ->searchable()
                            ->required(),
                        TextInput::make('address.street')
                            ->label(__('forms.address.street'))
                            ->required(),
                        TextInput::make('address.postal_code')
                            ->label(__('forms.address.postal_code'))
                            ->required(),
                        TextInput::make('address.building_number')
                            ->label(__('forms.address.building_number'))
                            ->required(),
                        TextInput::make('address.apartment')
                            ->label(__('forms.address.apartment')),
                        TextInput::make('address.email')
                            ->label(__('forms.address.email'))
                            ->live()
                            ->requiredWithout('address.phone_number')
                            ->email(),
                        TextInput::make('address.phone_number')
                            ->label(__('forms.address.phone'))
                            ->requiredWithout('address.email')
                    ]),
            ])->statePath('data');
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label(__('filament-panels::resources/pages/edit-record.form.actions.save.label'))
                ->submit('save'),
        ];
    }

    protected function onValidationError(ValidationException $exception): void
    {
        Notification::make()
            ->title(__('forms.validation.error'))
            ->danger()
            ->send();
    }

    public function save(): void
    {
        // @TODO: Move to seperate action
        /** @var Facility $tenant */
        $tenant = Filament::getTenant();
        $data   = $this->form->getState();

        $addressData = $data['address'];
        /** @var Address $existingAddress */
        $existingAddress = $tenant->address()->where('is_default', true)->first();

        if ($existingAddress) {
            $existingAddress->update([
                ...$addressData,
                'is_default' => true,
            ]);
        } else {
            $tenant->address()->create([
                $addressData,
                'is_default' => true,
            ]);
        }

        Notification::make()
            ->success()
            ->title(__('filament-panels::resources/pages/edit-record.notifications.saved.title'))
            ->send();
    }
}
