<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Post; // Import your model(s) as needed
use Illuminate\Http\Request;

class CustomBindings
{
    public function handle(Request $request, Closure $next)
    {
        // Example: Manually bind 'post' route parameter to Post model
        if ($request->route('post')) {
            $request->route()->setParameter('post', Post::findOrFail($request->route('post')));
        }

        return $next($request);
    }
}

