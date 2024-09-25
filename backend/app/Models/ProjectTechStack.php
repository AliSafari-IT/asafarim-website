<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTechStack extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'tech_stack_id'];

    // No timestamps on the pivot table unless necessary
    public $timestamps = false;

    /**
     * Define the relationship between a project and its tech stack.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Define the relationship between a tech stack and the project it belongs to.
     */
    public function techStack()
    {
        return $this->belongsTo(TechStack::class);
    }
}
