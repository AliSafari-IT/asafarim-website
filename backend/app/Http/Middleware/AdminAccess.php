<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AdminAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the authenticated user is an admin with a specific email address
        if (Auth::check() && Auth::user()->email === 'admin@asafarim.be') {
            return $next($request);
        }

        // If user is not admin, abort with 403 Forbidden
        // abort(403, 'Unauthorized action.');


        // Redirect to the home page if not authorized
        return redirect()->route('home')->with('error', 'Access denied.');
    }
}
