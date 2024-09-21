<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShortenedLinkRequest;
use App\Http\Services\ShortenedLinkService;
use App\Models\ShortenedLink;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ShortenedLinkController extends Controller
{
    public function index(): Response
    {
        $slugs = Auth::check() ? ShortenedLink::select("slug")->where("user_id", Auth::id())->get() : [];
        return Inertia::render("Home", compact("slugs"));
    }

    public function store(StoreShortenedLinkRequest $request, ShortenedLinkService $shortenedLinkService): Response
    {
        $shortenedLink = $shortenedLinkService->shortenLink($request)->slug;
        return Inertia::render("Home", compact("shortenedLink"));
    }

    public function show($slug): RedirectResponse
    {
        $shortenedLink = ShortenedLink::where('slug', $slug)->firstOrFail();
        $shortenedLink->increment('clicks');
        return redirect($shortenedLink->url);
    }

    public function destroy($slug): RedirectResponse
    {
        $shortenedLink = ShortenedLink::where('slug', $slug)->firstOrFail();
        $shortenedLink->delete();
        return redirect()->back();
    }
}
