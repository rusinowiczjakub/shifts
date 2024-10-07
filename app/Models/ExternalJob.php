<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExternalJob extends Model
{
    use HasFactory;

    protected $fillable = [
        'external_id',
        'title',
        'description',
        'rate',
        'rate_type', // brutto/netto
        'link',
        'location',
        'employer',
        'source',
        'contract_type', // umowa o prace, umowa zlecenie, b2b
        'region',
        'job_type',
    ];

    protected $casts = [
        'valid_to' => 'datetime',
        'published_at' => 'datetime'
    ];
}
