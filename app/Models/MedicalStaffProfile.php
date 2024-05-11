<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property GeoCommunity $city
 */
class MedicalStaffProfile extends Model
{
    use HasTimestamps;

    protected $table = 'medical_staff';

    protected $fillable = [
        'user_id',
        'bio'
    ];

    public function professionalTypes(): BelongsToMany
    {
        return $this->belongsToMany(
            ProfessionalType::class,
            'medical_staff_professional_types',
            'medical_staff_id'
        );
    }

    public function experiences(): HasMany
    {
        return $this->hasMany(JobExperience::class, 'medical_staff_id');
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class, 'medical_staff_id');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(GeoCommunity::class, 'geo_community_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
