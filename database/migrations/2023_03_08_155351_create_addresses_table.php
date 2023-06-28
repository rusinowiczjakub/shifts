<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('street');
            $table->string('city');
            $table->string('postal_code');
            $table->string('building_number');
            $table->string('apartment')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->boolean('is_default')->default(false);
            $table->unsignedBigInteger('adressable_id')->index();
            $table->string('adressable_type')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
