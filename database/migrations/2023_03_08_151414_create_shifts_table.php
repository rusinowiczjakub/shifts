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
        Schema::create('shifts', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->unsignedBigInteger('institution_id');
            $table->unsignedBigInteger('address_id');
            $table->decimal('total_pay', 18, 2);
            $table->integer('available_slots');
            $table->json('additional_requirements')->nullable();
            $table->unsignedBigInteger('professional_type_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shifts');
    }
};
