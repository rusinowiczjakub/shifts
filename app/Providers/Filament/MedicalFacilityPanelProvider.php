<?php

namespace App\Providers\Filament;

use App\Filament\Pages\RegisterFacility;
use App\Models\Facility;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class MedicalFacilityPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('medical-facility')
            ->path('medical-facility')
            ->login()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->tenant(Facility::class)
            ->tenantRegistration(RegisterFacility::class)
            ->brandLogo(
                fn() => view('filament.components.brand')
            )
            ->colors([
                'primary' => [
                    50 => 'rgb(233,242,255)',
                    100 => 'rgb(204,224,255)',
                    200 => 'rgb(132,184,255)',
                    300 => 'rgb(87,157,255)',
                    400 => 'rgb(56,139,255)',
                    500 => 'rgb(30,122,253)',
                    600 => 'rgb(11,102,228)',
                    700 => 'rgb(0,85,204)',
                    800 => 'rgb(10,50,108)',
                    900 => 'rgb(28,43,65)',
                ],
            ]);
    }
}
