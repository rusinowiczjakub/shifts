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
        Schema::create('medical_staff', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('surname')->nullable();
            $table->string('email');
            $table->string('password');
        });

        Schema::create('medical_staff_professional_types', function (Blueprint $table) {
            $table->foreignId('medical_staff_id')->references('id')->on('medical_staff');
            $table->unsignedBigInteger('professional_type_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_staff');
    }
};
