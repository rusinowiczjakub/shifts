<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeoCitiesTable extends Migration
{

    public function up()
    {
        Schema::create(
            'geo_cities',
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->unsignedInteger('gov_province_id')->nullable()->index();
                $table->unsignedInteger('gov_county_id')->nullable()->index();
                $table->unsignedInteger('gov_community_id')->nullable()->index();
                $table->string('name', 60)->nullable();
                $table->timestamps();
            }
        );
    }

    public function down()
    {
        Schema::dropIfExists('geo_cities');
    }
}
