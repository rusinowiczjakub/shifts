<?php

namespace App\Models\Concerns;

use App\Models\Shift;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasShift
{
    public function shift(): BelongsTo
    {
        return $this->belongsTo(Shift::class);
    }
}
