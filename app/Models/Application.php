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

    const STATUS_REQUESTED = 'REQUESTED';
    const STATUS_ACCEPTED = 'ACCEPTED';
    const STATUS_DECLINED = 'DECLINED';
    const STATUS_CANCELED = 'CANCELED';
    const STATUS_REMOVED = 'REMOVED';

    protected $fillable = [
        'status',
        'medical_staff_id',
        'shift_id'
    ];

    protected $attributes = [
        'status' => self::STATUS_REQUESTED
    ];
}
