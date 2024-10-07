<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Facility extends Model
{
    use HasFactory;

    protected $table = 'institutions';

    protected $fillable = [
        'name',
        'nip',
        'regon',
        'krs',
        'user_id'
    ];

    protected $casts = [
        'is_default' => 'boolean'
    ];

    public function address(): MorphOne
    {
        return $this->morphOne(Address::class, 'addressable')
            ->where('is_default', '=', true);
    }

    public function addresses(): MorphMany
    {
        return $this->morphMany(Address::class, 'addressable')
            ->where('is_default', '=', false);
    }
}
