<?php

namespace App\Models\Concerns;

use App\Models\ProfessionalType;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasProfessionalType
{
    public function professionalType(): BelongsTo
    {
        return $this->belongsTo(ProfessionalType::class);
    }
}
