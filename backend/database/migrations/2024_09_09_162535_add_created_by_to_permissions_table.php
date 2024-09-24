<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCreatedByToPermissionsTable extends Migration
{
    public function up()
    {
        // Check if the column does not exist before adding it
        if (!Schema::hasColumn('permissions', 'created_by')) {
            Schema::table('permissions', function (Blueprint $table) {
                $table->unsignedBigInteger('created_by')->nullable();
            });
        }
    }

    public function down()
    {
        // Rollback the column addition if it exists
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
    }
}
 