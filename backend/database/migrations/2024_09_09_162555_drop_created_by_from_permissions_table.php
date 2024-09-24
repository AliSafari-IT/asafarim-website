<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropCreatedByFromPermissionsTable extends Migration
{
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            // First, drop the foreign key constraint
            $table->dropForeign(['created_by']);

            // Then, drop the column
            $table->dropColumn('created_by');
        });
    }

    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            // Add the column back
            $table->unsignedBigInteger('created_by')->nullable();

            // Recreate the foreign key constraint
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });
    }
}
