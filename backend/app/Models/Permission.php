<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole(Role $role)
    {
        return $this->roles()->where('id', $role->id)->exists();
    }

    public function giveRoleTo(Role $role)
    {
        return $this->roles()->save($role);
    }

    public function revokeRoleTo(Role $role)
    {
        return $this->roles()->detach($role);
    }

    public function revokePermissionTo(Permission $permission)
    {
        return $this->roles()->detach($permission);
    }

    public function hasPermission(Permission $permission)
    {
        return $this->roles()->where('name', $permission->name)->exists();
    }

    public function givePermissionTo(Permission $permission)
    {
        return $this->roles()->save($permission);
    }

    public function detachPermissionTo(Permission $permission)
    {
        return $this->roles()->detach($permission);
    }

    public function hasPermissionTo($permission)
    {
        return $this->roles()->where('name', $permission)->exists();
    }

    public function givePermissionToRole(Role $role)
    {
        return $this->roles()->save($role);
    }

    public function revokePermissionToRole(Role $role)
    {
        return $this->roles()->detach($role);
    }

    public function hasPermissionToRole(Role $role)
    {
        return $this->roles()->where('id', $role->id)->exists();
    }

    public function hasUser(User $user)
    {
        return $this->roles()->where('id', $user->id)->exists();
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    
}
