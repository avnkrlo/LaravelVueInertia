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
        Schema::create('data_entry', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('business_email');
            $table->string('country');
            $table->integer('primary_contact');
            $table->string('file_name');
            $table->string('path');
            $table->string('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_entry');
    }
};
