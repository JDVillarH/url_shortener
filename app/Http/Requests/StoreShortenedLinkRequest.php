<?php

namespace App\Http\Requests;

use App\Rules\RateLimiting;
use App\Rules\UniqueRouteSlug;
use App\Rules\UrlNotInDomain;
use App\Rules\ValidTurnstileResponse;
use Illuminate\Foundation\Http\FormRequest;

class StoreShortenedLinkRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            "url" => ["required", "url", "max:2048", new RateLimiting, new UrlNotInDomain],
            "slug" => ["sometimes", "max:60", new UniqueRouteSlug, "unique:shortened_links,slug",],
            "turnstileToken" => ["required", new ValidTurnstileResponse]
        ];
    }

    public function messages(): array
    {
        return [
            "url.required" => "La URL para Acortar es obligatorio",
            "url.url" => "La URL para Acortar no es una URL válida",
            "url.max" => "La URL para Acortar debe tener menos de :max caracteres",
            "sñug.max" => "El identificador para URL debe tener menos de :max caracteres",
            "slug.unique" => "El identificador para URL ya se encuentra en uso",
            "turnstileToken.required" => "La verificación de Cloudflare Turnstile es obligatoria",
        ];
    }
}
