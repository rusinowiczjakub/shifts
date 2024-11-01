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
        Schema::create('external_jobs', function (Blueprint $table) {
            $table->id();

            $table->string('external_id');
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->float('rate')->nullable();
            $table->string('rate_type')->nullable();
            $table->text('link')->nullable();
            $table->text('location')->nullable();
            $table->text('employer')->nullable();
            $table->string('source')->nullable();
            $table->string('contract_type')->nullable();
            $table->string('region')->nullable();
            $table->string('job_type')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->timestamp('valid_to')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('external_jobs');
    }
};
