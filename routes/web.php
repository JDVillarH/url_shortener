<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShortenedLinkController;
use Illuminate\Support\Facades\Route;

Route::get("/", [ShortenedLinkController::class, "index"])->name("shortener.home");
Route::post("/", [ShortenedLinkController::class, "store"])->name("shortener.store");
Route::delete("/{slug}", [ShortenedLinkController::class, "destroy"])->name("shortener.destroy");

// Autenticanción GitHub
Route::get("/auth/github", [AuthController::class, "authGithub"])->name("auth.github");
Route::get("/auth/github-callback", [AuthController::class, "authGithubCallback"])->name("auth.github-callback");

// Autenticación Google
Route::get("/auth/google", [AuthController::class, "authGoogle"])->name("auth.google");
Route::get("/auth/google-callback", [AuthController::class, "authGoogleCallback"])->name("auth.google-callback");

// Logout
Route::post("/logout", [AuthController::class, "logout"])->name("auth.logout");

// Redirección de enlaces acortados
Route::get("/{slug}", [ShortenedLinkController::class, "show"])->name("shortener.redirect");
