<?php

namespace App\Providers;

use App\Models\Employer;
use App\Models\MedicalStaff;
use App\Models\Team;
use App\Models\User;
use App\Policies\TeamPolicy;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Team::class => TeamPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        //
        Gate::define('access-employer-zone', function (User $user) {
            return $user instanceof Employer;
        });

        Gate::define('access-staff-zone', function (User $user) {
            return $user instanceof MedicalStaff;
        });

        VerifyEmail::toMailUsing(
            function (object $notifiable, string $url) {

                $verificationCode = $this->generateVerificationCodeFor($notifiable);

                return (new MailMessage)
                    ->subject("Aktywuj swoje konto w Medshifts.app")
                    ->from("noreply@cleancitybf.com")
                    ->view(
                        "mails.auth.verification",
                        [
                            "code_numbers" => str_split($verificationCode->code),
                        ]
                    );
            });

        VerifyEmail::createUrlUsing(function ($notifiable) {
            return "";
        });
    }
}
