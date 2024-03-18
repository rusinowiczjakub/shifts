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
        Schema::create('job_experiences', function (Blueprint $table) {
            $table->id();
            $table->text('company');
            $table->timestamp('period_start');
            $table->timestamp('period_end')->nullable();
            $table->text('description');
            $table->foreignId('medical_staff_id')->references('id')->on('medical_staff');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_experiences');
    }
};
