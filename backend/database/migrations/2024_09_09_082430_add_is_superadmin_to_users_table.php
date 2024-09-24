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
        if (!Schema::hasColumn('users', 'is_super_admin'))
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_super_admin')->default(0); // default is not super admin
            $table->boolean('is_verified')->default(0);
            $table->boolean('is_banned')->default(0);
            $table->boolean('is_suspended')->default(0);
            $table->boolean('is_blocked')->default(0);
            $table->boolean('is_deleted')->default(0);
            $table->boolean('is_moderator')->default(0);
            $table->boolean('is_moderator_permanent')->default(0);
            $table->boolean('is_moderator_temporary')->default(0);
            $table->boolean('is_moderator_deleted')->default(0);
            $table->boolean('is_moderator_banned')->default(0);
            $table->boolean('is_moderator_suspended')->default(0);
            $table->boolean('is_moderator_blocked')->default(0);
            $table->boolean('is_moderator_verified')->default(0);
        });
    } 

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
