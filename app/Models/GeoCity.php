<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeoCity extends Model
{

    protected $table = 'geo_cities';
    protected $fillable = [
        'gov_province_id',
        'gov_county_id',
        'gov_community_id',
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

    public function community()
    {
        return $this->belongsTo(
            GeoCommunity::class,
            'gov_community_id',
            'gov_id'
        )->where(
            [
                'gov_province_id' => $this->gov_province_id,
                'gov_county_id'   => $this->gov_county_id,
            ]
        );
    }

    public function county()
    {
        return $this->hasOne(
            GeoCounty::class,
            'gov_id',
            'gov_county_id'
        )->where(
            'gov_province_id',
            $this->gov_province_id
        );
    }

}
