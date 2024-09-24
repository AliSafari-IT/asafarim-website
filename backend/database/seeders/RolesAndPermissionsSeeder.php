<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Create permissions
        Permission::create(['name' => 'view admin']);
        Permission::create(['name' => 'edit posts']);
        Permission::create(['name' => 'delete posts']);
        
        // Create roles and assign permissions
        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(['view admin', 'edit posts']);

        $role = Role::create(['name' => 'editor']);
        $role->givePermissionTo('edit posts');
    }
}
