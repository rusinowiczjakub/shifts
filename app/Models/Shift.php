<?php

namespace App\Models;

use App\Models\Concerns\HasAddresses;
use App\Models\Concerns\HasProfessionalType;
use App\Models\Enums\JobType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shift extends Model
{
    use HasFactory,
        SoftDeletes,
        HasProfessionalType;

    protected $fillable = [
        'start_date',
        'end_date',
        'professional_type_id',
        'institution_id',
        'address_id',
        'total_pay',
        'available_slots',
        'additional_requirements',
        'hourly_rate',
        'description',
        'job_type'
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'additional_requirements' => 'array',
        'job_type' => JobType::class
    ];

    public function applications(): HasMany
    {
        return $this->hasMany(Application::class, 'shift_id');
    }

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class, 'institution_id');
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'address_id');
    }

    public function benefits(): BelongsToMany
    {
        return $this->belongsToMany(Benefit::class, 'shifts_benefits');
    }
}
