<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            if (!Schema::hasTable('tech_stacks'))
            Schema::create('tech_stacks', function (Blueprint $table) {
                $table->id(); // Auto-incrementing ID
                $table->string('name'); // Name of the technology stack
                $table->text('description')->nullable(); // Description (optional)
                $table->timestamps(); // created_at and updated_at
            });
        }
    
        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::dropIfExists('tech_stacks');
        }
};
