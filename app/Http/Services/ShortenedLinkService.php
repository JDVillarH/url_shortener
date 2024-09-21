<?php

namespace App\Http\Services;

use App\Http\Requests\StoreShortenedLinkRequest;
use App\Models\ShortenedLink;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ShortenedLinkService
{
    public function shortenLink(StoreShortenedLinkRequest $request): ShortenedLink
    {
        $slug = $this->generateSlug($request->slug);

        return ShortenedLink::create([
            "url" => $request->url,
            "slug" => $slug,
            "user_id" => Auth::id() ?: 1
        ]);
    }

    public function generateSlug(?string $slug): string
    {
        $uniqueSlug = $slug ?? Str::random(10);

        while (ShortenedLink::where('slug', $uniqueSlug)->exists()) {
            $uniqueSlug = Str::random(10);
        }

        return $uniqueSlug;
    }
}
