<?php

namespace App\Models\Concerns;

use App\Models\MedicalStaffProfile;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasMedicalStaff
{
    public function medicalStaff(): BelongsTo
    {
        return $this->belongsTo(MedicalStaffProfile::class, 'medical_staff_id');
    }
}
