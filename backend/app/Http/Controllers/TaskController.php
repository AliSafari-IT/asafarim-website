<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    // React ts Inertia Vite
    public function index()
    {
        return Inertia::render('Tasks/Index', [
            'tasks' => Task::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    public function edit(Task $task)
    {
        return Inertia::render('Tasks/Edit', [
            'task' => $task
        ]);
    }

    public function show(Task $task)
    {
        return Inertia::render('Tasks/Show', [
            'task' => $task
        ]);
    }

    public function store(Request $request)
    {
        // Associate the task with the current user
        $request->validate([
            'title' => 'required',
            'description' => 'nullable'
        ]);

        // Create the task with the authenticated user's ID
        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        // task status ['pending', 'in_progress', 'completed']: default 'pending', if not specified
        $task->status = $request->status ?? 'pending';

        $task->user_id = auth()->id();
        $task->save();

        return redirect('/tasks');
    }


    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable'
        ]);

        $task->title = $request->title;
        $task->description = $request->description;
        $task->status = $request->status ?? 'pending';

        $task->save();

        return redirect('/tasks');
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return redirect('/tasks');
    }

}
