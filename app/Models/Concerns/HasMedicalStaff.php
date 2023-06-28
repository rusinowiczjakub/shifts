<?php

namespace App\Models\Concerns;

use App\Models\MedicalStaff;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasMedicalStaff
{
    public function medicalStaff(): BelongsTo
    {
        return $this->belongsTo(MedicalStaff::class);
    }
}
