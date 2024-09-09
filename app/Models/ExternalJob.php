<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExternalJob extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'hourly_rate',
        'rate_type', // brutto/netto
        'link',
        'location',
        'employer',
        'source',
        'contract_type' // umowa o prace, umowa zlecenie, b2b
    ];
}
