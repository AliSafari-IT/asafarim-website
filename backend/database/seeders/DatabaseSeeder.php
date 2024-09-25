<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Check if the admin role exists, and create it only if it doesn't
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
        ], [
            'description' => 'Admin role with full permissions',
        ]);

        // Check if the user role exists, and create it only if it doesn't
        $userRole = Role::firstOrCreate([
            'name' => 'user',
        ], [
            'description' => 'Standard user role',
        ]);

        // Check if the user with the email exists, and create it only if it doesn't
        $adminUser = User::firstOrCreate([
            'email' => 'asafarim@gmail.com',
        ], [
            'name' => 'Ali Safari',
            'password' => Hash::make('Ali+123456'),
        ]);

        // Assign the admin role to 'Ali Safari' only if it hasn't been assigned yet
        if (!$adminUser->roles()->where('name', 'admin')->exists()) {
            $adminUser->roles()->attach($adminRole);
        }

        // Create additional users and assign the user role
        $users = User::factory()->count(10)->create();

        foreach ($users as $user) {
            // Assign the regular user role to these users
            $user->roles()->attach($userRole);
        }

        // Seed other models
        \App\Models\Contact::factory()->count(50)->create();
        \App\Models\Task::factory()->count(50)->create();
        \App\Models\Project::factory()->count(10)->create();
        \App\Models\TechStack::factory()->count(10)->create();
        \App\Models\ProjectTechStack::factory()->count(10)->create();
        \App\Models\Post::factory()->count(20)->create();
    }
}
