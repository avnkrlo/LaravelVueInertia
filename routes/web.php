<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Auth;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

//Guest Access
Route::middleware('guest')->group(function (){
    Route::controller(AuthController::class)->group(function () {
        Route::get('/', 'index')->name('auth.index');

        Route::post('login', 'store')->name('login');
        
   });
   
   Route::controller(RegisterController::class)->group(function(){
        Route::get('create', 'index')->name('register.create');

        Route::post('store', 'store')->name('register.store');
   });
});

//Authenticated User
Route::middleware('auth')->group(function() {
    Route::controller(DashboardController::class)->group(function(){
        Route::get('dashboard', 'index')->name('dashboard.index');
        
        Route::post('logout', 'destroy')->name('dashboard.destroy');
    });
});