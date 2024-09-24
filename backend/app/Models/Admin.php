<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Admin extends User
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = config('auth.providers.users.model')::TABLE;
    }

    public function getAuthPassword()
    {
        return $this->password;
    }
    public function setPassword($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }
}
