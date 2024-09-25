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
        Schema::create('admins', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Admin's name
            $table->string('email')->unique(); // Admin's unique email address
            $table->string('password'); // Password for the admin
            $table->string('phone')->nullable(); // Optional phone number for the admin
            $table->timestamp('email_verified_at')->nullable(); // When the admin's email was verified
            $table->rememberToken(); // Token for "Remember Me" functionality
            $table->softDeletes(); // Adds a 'deleted_at' column for soft deletion
            $table->timestamps(); // Created at and updated at timestamps
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
