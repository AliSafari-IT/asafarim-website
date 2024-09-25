<?php
namespace Database\Factories;

use App\Models\Project;
use App\Models\TechStack;
use App\Models\ProjectTechStack;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProjectTechStack>
 */
class ProjectTechStackFactory extends Factory
{
    protected $model = ProjectTechStack::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id' => Project::factory(),   // Creates or associates with a project
            'tech_stack_id' => TechStack::factory(),  // Creates or associates with a tech stack
        ];
    }
}
