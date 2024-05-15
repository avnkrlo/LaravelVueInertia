<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('guest')->group(function (){
    //Auth Controller
    Route::controller(AuthController::class)->group(function () {
        Route::get('/', 'index')->name('guest.index');
        
   });
   
   Route::controller(RegisterController::class)->group(function(){
        Route::get('create', 'index')->name('guest.create');

        Route::post('store', 'store')->name('guest.store');
   });
});

Route::middleware('auth')->group(function() {
    Route::controller(AuthController::class)->group(function(){
        //
    });
});