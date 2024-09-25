<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'body' => $this->faker->paragraphs(3, true), // Generates a few paragraphs as the body
            'status' => $this->faker->randomElement(['draft', 'published']),
            'author_id' => User::factory(), // Create a new user or associate with an existing one
            'published_at' => $this->faker->randomElement([now(), null]), // Optionally set a publish date
        ];
    }
}
