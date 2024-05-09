<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('User/Index', [
        'name' => 'Aivan'
    ]);
});

Route::middleware('guest')->group(function (){
    //Auth Controller
   Route::controller(AuthController::class)->group(function () {
    Route::get('/', 'index')->name('auth.index');

   }); 
});

Route::middleware('auth')->group(function() {
    
});