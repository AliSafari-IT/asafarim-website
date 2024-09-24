<?php
// routes/api.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;


// Route for showing a specific user
Route::get('/users/{id}', [UserController::class, 'show']);

// API resource routes for the PostController
Route::apiResource('/posts', PostController::class);

// Grouped routes (no middleware)
Route::middleware([])->group(function () {
    Route::get('/users', [UserController::class, 'index']);
});

// Test route
Route::get('/test', function () {
    return response()->json(['message' => 'This is a test']);
});

Route::group(['prefix' => '/tasks', 'as' => 'tasks.'], function () {
    Route::get('/', [TaskController::class, 'list']);
    Route::get('/{id}', [TaskController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
    Route::post('/', [TaskController::class, 'store']);
    Route::put('/{id}', [TaskController::class, 'update'])
     ->where('id', '[1-9][0-9]*');
    Route::delete('/{id}', [TaskController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
    Route::put('/', [TaskController::class, 'reorder']);
});
