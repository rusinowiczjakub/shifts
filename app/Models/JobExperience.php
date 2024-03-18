<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobExperience extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'company',
        'period_start',
        'period_end',
        'description',
        'medical_staff_id'
    ];
}
