<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\MarkdownController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\TechStackController;
use App\Http\Controllers\AdminController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
});

// AdminArea routes
Route::middleware(['auth', 'admin.access'])->prefix('admin-area')->group(function () {
    Route::get('users', [AdminController::class, 'index'])->name('admin.users.index');
    Route::get('users/{user}', [AdminController::class, 'show'])->name('admin.users.show');
    Route::get('users/{user}/edit', [AdminController::class, 'edit'])->name('admin.users.edit'); 
    Route::post('users/{user}/edit', [AdminController::class,'update'])->name( 'admin.users.update'); 
    // Add other routes for AdminArea here...
});

// User routes
// Route::get('/users', [UserController::class, 'index'])->name('users.index');
// Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
// Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
// Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
// Route::post('/users/{user}', [UserController::class, 'update'])->name('users.update');
// Route::post('/users', [UserController::class, 'store'])->name('users.store');
// Route::post('/users/{user}/archive', [UserController::class, 'archive'])->name('users.archive');
// Route::post('/users/{user}/unarchive', [UserController::class, 'unarchive'])->name('users.unarchive');
// Route::post('/users/{user}/restore', [UserController::class,'restore'])->name( 'users.restore');
// // delete user
// Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

// Public routes
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'auth' => Auth::user(),
    ]);
})->name('home');

// Contact page routes
Route::get('/contact', function () {
    return Inertia::render('Contact/ContactPage', [
        'auth' => Auth::user(),
    ]);
})->name('contact');
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

// Projects routes
Route::middleware(['auth'])->group(function () {
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/create', [ProjectController::class, 'create']);
    Route::post('/projects', [ProjectController::class, 'store']);
});


Route::get('projects', function () {
    return Inertia::render('Projects/Index', [
        'projects' => \App\Models\Project::all(),
    ]);
})->name('projects.index');

Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
Route::post('/projects/store', [ProjectController::class, 'store'])->name('projects.store');
Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/projects/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
Route::put('/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');
Route::post('/projects/{project}/restore', [ProjectController::class, 'restore'])->name('projects.restore');
Route::post('/projects/{project}/archive', [ProjectController::class, 'archive'])->name('projects.archive');
Route::post('/projects/{project}/unarchive', [ProjectController::class, 'unarchive'])->name('projects.unarchive');

// Tech stacks routes
Route::resource('tech_stacks', TechStackController::class);

// Protected routes requiring authentication
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'auth' => Auth::user(),
        ]);
    })->name('dashboard');
});

// Authentication routes
Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [LogoutController::class, 'perform'])->name('logout');

// Registration routes
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');

// User profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Tasks routes
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');

    // Fallback route for undefined routes
    Route::fallback(function () {
        return Inertia::render('NotFound', [
            'auth' => Auth::user(),
        ]);
    });
});

// Markdown routes
Route::get('/tags/{tag}', [TagController::class, 'show'])->name('tags.show');
Route::get('/authors/{name}', [AuthorController::class, 'show'])->name('authors.show');
Route::get('/{folder}/{slug?}', [MarkdownController::class, 'showMd'])->name('markdown.showMd');

require __DIR__ . '/auth.php';
