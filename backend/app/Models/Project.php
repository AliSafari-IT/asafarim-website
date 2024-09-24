<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'projects';
    // public $timestamps = true; // Set to true if you want Laravel to manage created_at and updated_at timestamps
    // public $timestamps = false; // Disable automatic timestamp management

    protected $fillable = [
        'name', 'description', 'status', 'start_date', 'end_date', 'priority', 'createdby'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'createdby');
    }

    // A project can have multiple tasks
    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    // A project belongs to a user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Additional methods or relationships can be defined here
}
