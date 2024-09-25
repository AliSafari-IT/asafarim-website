<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    /**
     * Set the table for the Admin model.
     * By default, it will use the 'admins' table.
     */
    protected $table = 'admins'; // If you want a separate 'admins' table

    /**
     * Get the admin's password for authentication.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }

    /**
     * Automatically hash the password when setting it.
     *
     * @param string $password
     * @return void
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    /**
     * Scope a query to only include active admins.
     */
    public function scopeActive($query)
    {
        return $query->whereNull('deleted_at');
    }
}
