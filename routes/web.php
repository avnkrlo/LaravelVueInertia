<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('User/Index');
// });

Route::middleware('guest')->group(function (){
    //Auth Controller
    Route::controller(AuthController::class)->group(function () {
    Route::get('/', 'index')->name('guest.index');
    Route::get('/create', 'store')->name('guest.store');
   }); 
});

Route::middleware('auth')->group(function() {
    
});