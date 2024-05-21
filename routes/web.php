<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataCleansingController;
use App\Http\Controllers\DataConversionController;
use App\Http\Controllers\DataEntryQuoteController;
use App\Http\Controllers\DataProcessingController;
use App\Http\Controllers\DEServicesController;
use App\Http\Controllers\MLDEvaluationController;
use App\Http\Controllers\MLDProofreadingController;
use App\Http\Controllers\MLDQuoteController;
use App\Http\Controllers\MLDTeachingController;
use App\Http\Controllers\MLDTranslationController;

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

    Route::controller(DEServicesController::class)->group(function() {
        Route::get('services', 'index')->name('services.index');
    });

    Route::controller(DataProcessingController::class)->group(function() {
        Route::get('processing', 'index')->name('processing.index');
    });

    Route::controller(DataConversionController::class)->group(function() {
        Route::get('conversion', 'index')->name('conversion.index');
    });

    Route::controller(DataCleansingController::class)->group(function() {
        Route::get('cleansing', 'index')->name('cleansing.index');
    });

    Route::controller(MLDProofreadingController::class)->group(function() {
        Route::get('mld-proofreading-services', 'index')->name('mld-proofreading.index');
    });

    Route::controller(MLDTeachingController::class)->group(function() {
        Route::get('mld-online-english-language-teaching', 'index')->name('mld-teaching.index');
    });

    Route::controller(MLDTranslationController::class)->group(function() {
        Route::get('mld-translation-services', 'index')->name('mld-translation.index');
    });

    Route::controller(MLDEvaluationController::class)->group(function() {
        Route::get('mld-test-rating-and-evaluation', 'index')->name('mld-evaluation.index');
    });

    Route::controller(DataEntryQuoteController::class)->group(function() {
        Route::get('de-quote', 'index')->name('dequote.index');
    });

    Route::controller(MLDQuoteController::class)->group(function() {
        Route::get('mld-quote', 'index')->name('mldquote.index');
    });

    Route::controller(BlogController::class)->group(function() {
        Route::get('blog', 'index')->name('blog.index');
    });

    Route::controller(ContactController::class)->group(function() {
        Route::get('contact', 'index')->name('contact.index'); 
    });
});