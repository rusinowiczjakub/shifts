<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeoCounty extends Model
{

    protected $table = 'geo_counties';
    protected $fillable = [
        'gov_province_id',
        'gov_id',
        'name',
    ];

    public function province()
    {
        return $this->belongsTo(
            GeoProvince::class,
            'gov_province_id',
            'gov_id'
        );
    }

    public function cities()
    {
        return $this->hasMany(
            GeoCity::class,
            'gov_county_id',
            'gov_id'
        )->where(
            'gov_province_id',
            $this->gov_province_id
        );
    }

    public function communities()
    {
        return $this->hasMany(
            GeoCommunity::class,
            'gov_county_id',
            'gov_id'
        )->where(
            'gov_province_id',
            $this->gov_province_id
        );
    }
}
