<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Gminy
 */
class CreateGeoCommunitiesTable extends Migration
{

    public function up()
    {
        Schema::create(
            'geo_communities',
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('gov_id')->unsigned();
                $table->unsignedInteger('gov_county_id')->nullable()->index();
                $table->unsignedInteger('gov_province_id')->nullable()->index();
                $table->string('name', 60)->nullable();
                $table->timestamps();
            }
        );
    }

    public function down()
    {
        Schema::dropIfExists('geo_communities');
    }
}
