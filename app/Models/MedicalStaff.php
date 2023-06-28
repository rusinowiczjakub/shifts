<?php

namespace App\Models;

use App\Models\Concerns\HasAddresses;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class MedicalStaff extends Model
{
    use HasFactory,
        HasAddresses;

    protected $fillable = [
        'name',
        'surname',
        'email',
        'password'
    ];

    public function professionalTypes(): BelongsToMany
    {
        return $this->belongsToMany(
            ProfessionalType::class,
            'medical_staff_professional_types',
        );
    }
}
