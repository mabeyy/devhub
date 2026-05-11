<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Portfolio'));

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
