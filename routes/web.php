<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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
    Route::controller(DashboardController::class)->group(function(){
        Route::get('dashboard', 'index')->name('auth.dashboard');
    });
});