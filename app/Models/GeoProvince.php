<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeoProvince extends Model
{

    protected $table = 'geo_provinces';
    protected $fillable = [
        'gov_id',
        'name',
    ];

    public function cities()
    {
        return $this->hasMany(
            GeoCity::class,
            'gov_province_id',
            'gov_id'
        );
    }

    public function communities()
    {
        return $this->hasMany(
            GeoCommunity::class,
            'gov_province_id',
            'gov_id'
        );
    }

    public function counties()
    {
        return $this->hasMany(
            GeoCounty::class,
            'gov_province_id',
            'gov_id'
        );
    }
}
