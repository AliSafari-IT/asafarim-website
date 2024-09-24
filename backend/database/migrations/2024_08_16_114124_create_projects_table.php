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
        Schema::table('projects', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->after('name');
            $table->text('description')->nullable()->after('user_id'); // Changed from string to text
            $table->string('status')->default('ongoing')->after('description');
            $table->date('start_date')->nullable()->after('status');
            $table->date('end_date')->nullable()->after('start_date');
            $table->integer('priority')->default(0)->after('end_date');
        
            $table->timestamps(); // Adds created_at and updated_at columns
        
            // Add foreign key constraint for user_id
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
