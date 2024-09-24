<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\User;
use HTMLPurifier;
use HTMLPurifier_Config;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function __construct()
    {
        // Apply middleware to all methods except the index method, for example.
        $this->middleware('auth')->except(['index']);

        // If you want the middleware only on certain methods:
        // $this->middleware('auth')->only(['create', 'store']);
    }


    public function index()
    {
        $projects = Project::all();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,

        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/AddNew', [
            'users' => User::all(),
        ]);
    }

    /**
     * Store a newly created project in storage.
     */
    public function store(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:ongoing,completed,on_hold',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'priority' => 'integer|min:0|max:5',
        ]);

        // Sanitize the HTML content in the description
        $config = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($config);
        $validatedData['description'] = $purifier->purify($request->description);
        // Check if the user is authenticated
        if (!auth()->check()) {
            // Redirect to the previous page if available, or fallback to the index page
            return redirect()->route('projects.index')->with('error', 'You need to be logged in to perform this action.');
        }
        // Automatically assign the authenticated user's ID to `createdby`
        $validatedData['createdby'] = auth()->user()->id;

        // Create a new project
        Project::create($validatedData);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }



    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        $users = User::all();
        return Inertia::render('Projects/Edit', [
            'project' => $project,
            'users' => $users
        ]);
    }

    /**
     * Update the specified project in storage.
     */
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        // Validate input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:ongoing,completed,on_hold',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'priority' => 'integer|min:0|max:5',
            'createdby' => 'required|integer|exists:users,id',
        ]);
        // Sanitize the HTML content in the description
        $config = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($config);
        $validatedData['description'] = $purifier->purify($request->description);

        // updated by current user id and updated at current timestamp
        $validatedData['updated_by'] = auth()->user()->id;
        $validatedData['updated_at'] = now();

        // Update project data in database with validated data and timestamps
        $project->update($validatedData);

        // Redirect to projects index with success message
        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }
    /**
     * Redirect to projects/DeleteProject page.
     */
    public function delete($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Projects/Delete', [
            'project' => $project,

        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete(); // This will soft delete the project

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');

    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($id)
    {
        $project = Project::withTrashed()->find($id);
        if ($project) {
            $project->restore();
        }

        return redirect()->route('projects.index');
    }

    /**
     * Archive the specified resource in storage.
     */
    public function archive(Project $project)
    {
        // Archiving logic here
        $project->update(['archived' => true]);

        return redirect()->route('projects.index');
    }

    /**
     * Unarchive the specified resource in storage.
     */
    public function unarchive(Project $project)
    {
        // Unarchiving logic here
        $project->update(['archived' => false]);

        return redirect()->route('projects.index');
    }
}
