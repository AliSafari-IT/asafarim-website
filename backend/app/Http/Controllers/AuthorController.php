<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Symfony\Component\Yaml\Yaml;
use Illuminate\Support\Facades\Auth;

class AuthorController extends Controller
{
    public function show($name)
    {
        // Path to the authors.yml file
        $authorsFilePath = resource_path('js/config/authors.yml');

        // Check if the file exists and parse it
        $authors = File::exists($authorsFilePath) ? Yaml::parseFile($authorsFilePath) : [];

        // Normalize the name for comparison
        $normalizedName = strtolower($name);

        // Find the author details by name
        $author = null;
        foreach ($authors as $key => $authorDetails) {
            if (strtolower($authorDetails['name']) === $normalizedName) {
                $author = $authorDetails;
                break;
            }
        }

        // If author not found, abort with 404
        if (!$author) {
            abort(404, 'Author not found');
        }

        // Render the AuthorPage component with the author data
        return Inertia::render('AuthorPage', [
            'auth' => Auth::user(),
            'author' => $author,
        ]);
    }
}
