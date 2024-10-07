<?php

use App\Models\Enums\ContractType;
use App\Models\Enums\JobType;
use App\Models\Enums\RateType;
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
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->unsignedBigInteger('institution_id')->nullable();
            $table->unsignedBigInteger('address_id')->nullable();
            $table->decimal('total_pay', 18, 2)->nullable();
            $table->integer('available_slots')->nullable();
            $table->json('additional_requirements')->nullable();
            $table->unsignedBigInteger('professional_type_id')->nullable();
            $table->text('description')->nullable();
            $table->enum('job_type', collect(JobType::cases())->map(fn(JobType $jobType) => $jobType->value)->toArray());
            $table->json('contract_types')->nullable();
            $table->decimal('rate', 18, 2)->nullable();
            $table->enum(
                'rate_type',
                collect(RateType::cases())->map(fn(RateType $rateType) => $rateType->value)->toArray()
            );
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
