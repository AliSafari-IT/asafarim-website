<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    // Define the attributes that can be mass assigned
    protected $fillable = ['name', 'email', 'phone', 'message', 'subject', 'address', 'company', 'status'];

    // Optionally, you can define additional relationships or methods
}

