<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Symfony\Component\Yaml\Yaml;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Str;


class TagController extends Controller
{
    public function show($tag)
    {
        // Path to the tags.yml file
        $tagsFilePath = resource_path('js/config/tags.yml');

        // Check if the file exists and parse it
        $tags = File::exists($tagsFilePath) ? Yaml::parseFile($tagsFilePath) : [];
       // dd ($tag,$tags);
        // Check if the tag exists in the parsed YAML
        if (!isset($tags[$tag])) {
            abort(404, 'Tag not found');
        }

        // Get the specific tag data
        $tagData = $tags[$tag];

        // Render the TagPage component with the tag data
        return Inertia::render('TagPage', [
            'auth' => Auth::user(),
            'tag' => $tagData,
        ]);
    }
}
