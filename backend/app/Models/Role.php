<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function hasPermission(Permission $permission)
    {
        return $this->permissions()->where('id', $permission->id)->exists();
    }

    public function givePermissionTo(Permission $permission)
    {
        return $this->permissions()->save($permission);
    }

    public function revokePermissionTo(Permission $permission)
    {
        return $this->permissions()->detach($permission);
    }

    public function giveRoleTo(User $user)
    {
        return $this->users()->save($user);
    }

    public function revokeRoleTo(User $user)
    {
        return $this->users()->detach($user);
    }

    public function hasPermissionTo($permission)
    {
        return $this->permissions()->where('name', $permission)->exists();
    }
    public function givePermissionToRole(Role $role)
    {
        return $this->permissions()->save($role);
    }

    public function revokePermissionToRole(Role $role)
    {
        return $this->permissions()->detach($role);
    }

    public function hasPermissionToRole(Role $role)
    {
        return $this->permissions()->where('id', $role->id)->exists();
    }
    public function hasUser(User $user)
    {
        return $this->users()->where('id', $user->id)->exists();
    }
}
