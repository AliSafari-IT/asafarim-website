<?php
// app/Http/Controllers/LogoutController.php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogoutController extends Controller
{
    public function perform(Request $request)
    {
        // Log the user out from the application
        Auth::logout();

        // Invalidate the user's session
        $request->session()->invalidate();

        // Regenerate the session token
        $request->session()->regenerateToken();

        // Redirect to the welcome page after logout
        return redirect()->route('welcome');
    }

    // Redirect to home with user data cleared
    public function home()
    {

        return Inertia::render('Auth/Logout', [
            'auth' => null
        ]);
    }
    public function logout(Request $request)
    {
        $this->perform($request);
    }

    // Redirect to Welcome
    public function welcome(){
        return Inertia::render('Welcome', [
            'auth'=> Auth::guard('web')->user()
            ]);
    }

}

