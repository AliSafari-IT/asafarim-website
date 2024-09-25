<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Contact name
            $table->string('email'); // Contact email
            $table->string('phone')->nullable(); // Optional phone number
            $table->string('subject')->nullable(); // Optional subject of the message
            $table->text('message'); // Message body
            $table->string('address')->nullable(); // Optional address
            $table->string('company')->nullable(); // Optional company
            $table->enum('status', ['pending', 'resolved', 'archived'])->default('pending'); // Status of the contact message
            $table->softDeletes(); // Adds a 'deleted_at' column for soft deletion
            $table->timestamps(); // Automatically handles created_at and updated_at fields
        });
    }

    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};
