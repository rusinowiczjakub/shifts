<?php

namespace App\Models;

use App\Mail\VerifyEmail;
use App\Models\Enums\UserType;
use App\Providers\Filament\MedicalFacilityPanelProvider;
use Carbon\Carbon;
use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasTenants;
use Filament\Panel;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Mail;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Sanctum\HasApiTokens;
use Parental\HasChildren;

class User extends Authenticatable implements MustVerifyEmail, FilamentUser, HasTenants
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasChildren;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'type',
        'onboarding_finished_at',
        'phone_number',
        'active_notifications'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'onboarding_finished_at' => 'datetime'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    protected array $childTypes = [
        'STAFF' => MedicalStaff::class,
        'EMPLOYER' => Employer::class
    ];

    public function ownedFacilities(): HasMany
    {
        return $this->hasMany(Facility::class);
    }

    public function facilities(): BelongsToMany
    {
        return $this->belongsToMany(Facility::class);
    }

    public function sendEmailVerificationNotification(): void
    {
        VerificationCode::where('email', $this->email)->first()?->delete();

        $code = VerificationCode::createCode($this->email);

        // @TODO: change to notification
        Mail::to($this)->send(new VerifyEmail($code));
    }

    public function finishOnboarding(): void
    {
        $this->update(['onboarding_finished_at' => new Carbon()]);
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return true;
        //return $this->type === UserType::EMPLOYER &&
        //    $panel->getId() === app(MedicalFacilityPanelProvider::class)->getId();
    }

    public function canAccessTenant(Model $tenant): bool
    {
        return $this->facilities()->whereKey($tenant)->exists();
    }

    public function getTenants(Panel $panel): array|Collection
    {
        return $this->facilities;
    }

    public function getProfilePhotoUrlAttribute(): ?string
    {
        return $this->profile_photo_path;
    }
}
