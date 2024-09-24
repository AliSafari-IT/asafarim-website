<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Routing\Router;
use Illuminate\Contracts\Routing\Registrar;

class SubstituteBindings
{
    /**
     * The router instance.
     *
     * @var \Illuminate\Routing\Router
     */
    protected $router;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->router->substituteBindings($request->route());

        return $next($request);
    }
}
