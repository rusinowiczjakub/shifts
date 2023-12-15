<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'street',
        'city',
        'postal_code',
        'building_number',
        'apartment',
        'email',
        'phone_number',
        'is_default'
    ];

    protected $attributes = [
        'is_default' => false
    ];
}
