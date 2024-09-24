<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Assuming the 'is_admin' column in your users table determines if a user is an admin
        if (Auth::check() && Auth::user()->is_admin) {
            return $next($request);
        }

        return redirect('/'); // Redirect to home page if not admin
    }
}
