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
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('title'); // Title of the post
            $table->text('body'); // Body content of the post
            $table->enum('status', ['draft', 'published'])->default('draft'); // Post status
            $table->foreignId('author_id')->constrained('users')->onDelete('cascade'); // Foreign key for the author (user)
            $table->timestamp('published_at')->nullable(); // Publish date
            $table->softDeletes(); // Adds a 'deleted_at' column for soft deletion
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
