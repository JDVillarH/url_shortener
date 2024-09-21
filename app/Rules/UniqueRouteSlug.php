<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Route;

class UniqueRouteSlug implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        foreach (Route::getRoutes() as $route) {
            if ($route->uri() === trim($value, '/')) {
                $fail("El identificador para URL ya se encuentra en uso");
                return;
            }
        }
    }
}
