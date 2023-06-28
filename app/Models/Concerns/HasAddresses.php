<?php

namespace App\Models\Concerns;

use App\Models\Address;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasAddresses
{
    public function addresses(): MorphMany
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
