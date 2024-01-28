<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Województwa
 */
class CreateGeoProvincesTable extends Migration
{

    public function up()
    {
        Schema::create(
            'geo_provinces',
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('gov_id')->unsigned();
                $table->string('name', 60)->nullable();
                $table->timestamps();
            }
        );
    }

    public function down()
    {
        Schema::dropIfExists('geo_provinces');
    }

}
