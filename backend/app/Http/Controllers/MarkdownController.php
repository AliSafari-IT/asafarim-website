<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Spatie\YamlFrontMatter\YamlFrontMatter;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Yaml\Yaml;

class MarkdownController extends Controller
{
    public function showMd($folder = null, $slug = null)
    {
        // if slug is null, set it to a random string 24 characters long
        if (is_null($slug)) {
            $slug = 'index';
        } else {
            $slug = $this->normalizeSlug($slug);
        }

        // Default folder handling if none provided (e.g., ReadMe for root)
        if (is_null($folder)) {
            $folder = 'ReadMe';
        }

        $folder = ucfirst($folder);
        
        // Path to the Markdown file
        $basePath = resource_path('js/Pages/' . $folder);
        $filePath = rtrim($basePath, '/') . '/' . $slug . '.md';

        // Check if the file exists
        if (!File::exists($filePath)) {
            abort(404, 'Page not found');
        }

        // Parse the Markdown file to extract the front matter and content
        $markdownContent = File::get($filePath);
        $document = YamlFrontMatter::parse($markdownContent);

        // Load and parse the tags.yml file for tag labels
        $tagsFilePath = resource_path('js/config/tags.yml');
        $tags = File::exists($tagsFilePath) ? Yaml::parseFile($tagsFilePath) : [];

        // Load and parse the authors.yml file for author details
        $authorsFilePath = resource_path('js/config/authors.yml');
        $allAuthors = File::exists($authorsFilePath) ? Yaml::parseFile($authorsFilePath) : [];

        // Normalize authors to always be an array
        $documentAuthors = is_array($document->authors) ? $document->authors : [$document->authors];

        // Fetch author details from the authors.yml based on the author's keys
        $authorDetails = [];
        foreach ($documentAuthors as $authorKey) {
            if (isset($allAuthors[$authorKey])) {
                $authorDetails[] = $allAuthors[$authorKey];
            }
        }
        $user = Auth::user();
        // Pass the front matter, tags, and content to the React component
        return Inertia::render('MarkdownPage', [
            'auth' => $user,
            'markdownContent' => $document->body(),
            'meta' => [
                'title' => $document->title,
                'slug' => $document->slug,
                'authors' => $authorDetails,  // Pass author details array
                'tags' => $document->tags,
                'hide_table_of_contents' => $document->hide_table_of_contents,
                'page' => $document->page,
                'date' => $document->date,
                'showLastUpdateTime' => $document->showLastUpdateTime,
            ],
            'allTags' => $tags,
            'allAuthors' => $authorDetails
        ]);
    }

    private function normalizeSlug($slug)
    {
        $slug = trim($slug, '/');
        return empty($slug) || $slug === 'index' ? 'index' : Str::slug($slug);
    }
}
