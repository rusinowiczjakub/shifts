<?php

namespace App\Models;

use App\Models\Concerns\HasAddresses;
use App\Models\Concerns\HasProfessionalType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shift extends Model
{
    use HasFactory,
        HasAddresses,
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
        'additional_requirements'
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'additional_requirements' => 'array'
    ];

    protected $attributes = [
        'institution_id' => 1,
        'address_id' => 1,
    ];
}
