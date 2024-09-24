<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if we are on the production server
$isProduction = ($_SERVER['HTTP_HOST'] === 'asafarim.be' || $_SERVER['HTTP_HOST'] === 'www.asafarim.be');

if ($isProduction) {
    // Paths for the production environment
    $maintenancePath = __DIR__ . '/../../../apps/laravel/storage/framework/maintenance.php';
    $autoloadPath = __DIR__ . '/../../../apps/laravel/vendor/autoload.php';
    $appPath = __DIR__ . '/../../../apps/laravel/bootstrap/app.php';
} else {
    // Paths for the development environment
    $maintenancePath = __DIR__ . '/../storage/framework/maintenance.php';
    $autoloadPath = __DIR__ . '/../vendor/autoload.php';
    $appPath = __DIR__ . '/../bootstrap/app.php';
}

// Check for maintenance mode
if (file_exists($maintenancePath)) {
    require $maintenancePath;
}

// Register the Composer autoloader
require $autoloadPath;

// Bootstrap Laravel and handle the request
$app = require_once $appPath;

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
