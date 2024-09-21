<?php

namespace App\Rules;

use Closure;
use DerekCodes\TurnstileLaravel\TurnstileLaravel;
use Illuminate\Contracts\Validation\ValidationRule;

class ValidTurnstileResponse implements ValidationRule
{

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $turnstile = new TurnstileLaravel;
        $response = $turnstile->validate($value);
        if ($response["status"] !== 1) {
            $fail("Verificación de Cloudflare Turnstile fallida");
        }
    }
}
