<?php

// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;


class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        \Log::info('UserController@index was called');
        // return AdminArea/Users/Index.tsx
        return Inertia::render('AdminArea/Users/Index', [
            'users' => $users,
            'auth' => Auth::user(),
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminArea/Users/Create');
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
    return response()->json($user, 201);
    }

/**
     * Show the specified user.
     */
    public function show(User $user)
    {
        return Inertia::render('AdminArea/Users/Show', [
            'user' => $user,
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('AdminArea/Users/Edit', [
            'user' => $user,
        ]);
    } 

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $user->update($validated);

        return redirect()->route('users.show', $user->id)->with('success', 'User updated successfully.');
    }

    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }
}
