<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    /**
     * Relationship with User (many-to-many).
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * Relationship with Permission (many-to-many).
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    /**
     * Check if the role has a specific permission.
     */
    public function hasPermission(Permission $permission): bool
    {
        return $this->permissions()->where('id', $permission->id)->exists();
    }

    /**
     * Grant a permission to the role.
     */
    public function givePermissionTo(Permission $permission)
    {
        return $this->permissions()->attach($permission);
    }

    /**
     * Revoke a permission from the role.
     */
    public function revokePermission(Permission $permission)
    {
        return $this->permissions()->detach($permission);
    }

    /**
     * Assign the role to a user.
     */
    public function giveRoleTo(User $user)
    {
        return $this->users()->attach($user);
    }

    /**
     * Remove the role from a user.
     */
    public function revokeRole(User $user)
    {
        return $this->users()->detach($user);
    }
}
