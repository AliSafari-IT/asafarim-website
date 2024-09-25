<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechStack extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'category', 'popularity', 'official_site'];

    /**
     * Define possible categories for tech stacks.
     */
    public static function categories(): array
    {
        return ['frontend', 'backend', 'database', 'devops', 'mobile', 'cloud', 'testing'];
    }

    /**
     * Define possible popularity levels for tech stacks.
     */
    public static function popularities(): array
    {
        return ['trending', 'common', 'niche'];
    }

     // Relationship with Project
     public function projects()
     {
         return $this->belongsToMany(Project::class, 'project_tech_stack');
     }
     
}
