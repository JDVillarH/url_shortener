<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UrlNotInDomain implements ValidationRule
{

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $currentUrl = parse_url($value);
        $appUrl = parse_url(config('app.url'));

        if (strtolower($currentUrl["host"]) === strtolower($appUrl["host"])) {
            $fail("Este dominio está baneado");
        }
    }
}
