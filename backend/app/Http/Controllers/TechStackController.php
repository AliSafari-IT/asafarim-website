<?php

namespace App\Http\Controllers;

use App\Models\TechStack;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechStackController extends Controller
{
    public function index()
    {
        $techStacks = TechStack::all();
        return Inertia::render('TechStacks/Index', [
            'techStacks' => $techStacks,
        ]);
    }

    public function create()
    {
        return Inertia::render('TechStacks/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        TechStack::create($validatedData);

        return redirect()->route('tech_stacks.index')->with('success', 'Tech stack created successfully.');
    }

    public function edit(TechStack $techStack)
    {
        return Inertia::render('TechStacks/Edit', [
            'techStack' => $techStack,
        ]);
    }

    public function update(Request $request, TechStack $techStack)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $techStack->update($validatedData);

        return redirect()->route('tech_stacks.index')->with('success', 'Tech stack updated successfully.');
    }

    public function destroy(TechStack $techStack)
    {
        $techStack->delete();

        return redirect()->route('tech_stacks.index')->with('success', 'Tech stack deleted successfully.');
    }
}
