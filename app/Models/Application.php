<?php

namespace App\Models;

use App\Models\Concerns\HasMedicalStaff;
use App\Models\Concerns\HasShift;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory,
        HasShift,
        HasMedicalStaff;

    protected $fillable = [
        'status'
    ];

}
