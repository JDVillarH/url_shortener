<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;

class RateLimiting implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $userId = Auth::check() ? Auth::id() : request()->ip();
        $rateLimitKey = "shortener.store:$userId";

        if (RateLimiter::tooManyAttempts($rateLimitKey, 5)) {
            $waitTime = RateLimiter::availableIn($rateLimitKey);
            $fail("Intenta de nuevo en $waitTime segundos");
        } else {
            RateLimiter::increment($rateLimitKey);
        }
    }
}
