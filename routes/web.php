<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataEntryQuoteController;
use App\Http\Controllers\DEServicesController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\MLDQuoteController;
use App\Http\Controllers\MLDServicesController;
use App\Http\Controllers\PrivacyController;
use App\Http\Controllers\RecruitmentController;
use App\Http\Controllers\SDQuoteController;
use App\Http\Controllers\SDServicesController;

//Guest Access
Route::middleware('guest')->group(function (){
    Route::controller(IndexController::class)->group(function(){
        Route::get('/', 'index')->name('index');
    });

    Route::controller(DEServicesController::class)->group(function() {
        Route::get('de-services', 'index')->name('deservices.index');
    });

    Route::controller(MLDServicesController::class)->group(function() {
        Route::get('mld-services', 'index')->name('mldservices.index');
    });

    Route::controller(SDServicesController::class)->group(function() {
        Route::get('sd-services', 'index')->name('sdservices.index');
    });

    Route::controller(DataEntryQuoteController::class)->group(function() {
        Route::get('de-quote', 'index')->name('dequote.index');
    });

    Route::controller(MLDQuoteController::class)->group(function() {
        Route::get('mld-quote', 'index')->name('mldquote.index');
    });

    Route::controller(SDQuoteController::class)->group(function() {
        Route::get('sd-quote', 'index')->name('sdquote.index');
    });

    Route::controller(BlogController::class)->group(function() {
        Route::get('blog', 'index')->name('blog.index');
    });

    Route::controller(ContactController::class)->group(function() {
        Route::get('contact', 'index')->name('contact.index'); 
    });

    Route::controller(PrivacyController::class)->group(function() {
        Route::get('privacy-policy', 'index')->name('privacy.index');
    });

    Route::controller(RecruitmentController::class)->group(function() {
        Route::get('recruitment', 'index')->name('recruitment.index');
    });
});