<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    /**
     * Relationship with roles (many-to-many).
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Check if a permission is assigned to a specific role.
     */
    public function hasRole(Role $role): bool
    {
        return $this->roles()->where('id', $role->id)->exists();
    }

    /**
     * Assign a role to the permission.
     */
    public function giveRoleTo(Role $role)
    {
        return $this->roles()->attach($role);
    }

    /**
     * Revoke a role from the permission.
     */
    public function revokeRole(Role $role)
    {
        return $this->roles()->detach($role);
    }

    /**
     * Check if the permission is assigned to a specific user (through roles).
     */
    public function hasUser(User $user): bool
    {
        return $this->roles()->whereHas('users', function ($query) use ($user) {
            $query->where('id', $user->id);
        })->exists();
    }

    /**
     * Relationship with users (many-to-many, through roles).
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'role_user', 'role_id', 'user_id')
                    ->using(Role::class);
    }
}
