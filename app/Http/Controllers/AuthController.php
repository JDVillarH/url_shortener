<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function authGithub()
    {
        return Socialite::driver("github")->redirect();
    }

    public function authGithubCallback()
    {
        $githubUser = Socialite::driver("github")->user();

        $user = User::where("github_id", $githubUser->id)->orWhere("email", $githubUser->email)->first();

        if ($user) {
            $user->update(["github_id" => $githubUser->id, "name" => $githubUser->name]);
        } else {
            $user = User::create(["github_id" => $githubUser->id, "name" => $githubUser->name, "email" => $githubUser->email]);
        }

        Auth::login($user);

        return redirect()->route("shortener.home");
    }

    public function authGoogle()
    {
        return Socialite::driver("google")->redirect();
    }

    public function authGoogleCallback()
    {
        $userGoogle = Socialite::driver("google")->user();

        $user = User::where("google_id", $userGoogle->id)->orWhere("email", $userGoogle->email)->first();

        if ($user) {
            $user->update(["google_id" => $userGoogle->id, "name" => $userGoogle->name]);
        } else {
            $user = User::create(["google_id" => $userGoogle->id, "name" => $userGoogle->name, "email" => $userGoogle->email]);
        }

        Auth::login($user, true);

        return redirect()->route("shortener.home");
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route("shortener.home");
    }
}
