<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator as ValidatorFacade;

class AdminController extends Controller
{

    public function index()
    {
        $user = Auth::user();

        // Pass user data including roles and permissions to Inertia
        return Inertia::render('AdminArea/Users/Index', [
            'user' => $user->only(['name', 'email']),
            'roles' => $user->getRoleNames(), // Get the roles
            'permissions' => $user->getAllPermissions()->pluck('name') // Get all permissions
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return Redirect::route('admin')->with('success', 'User deleted successfully');
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return Redirect::route('admin')->with('success', 'User created successfully');
    }
    
    public function create()
    {
        return Inertia::render('AdminArea/Users/Create', [
            'auth' => Auth::user(),
        ]);
    }

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
        $user->update($request->all());
        return Redirect::route('admin')->with('success', 'User updated successfully');
    }
}
