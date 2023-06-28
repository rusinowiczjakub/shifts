<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class EmployerAccess
{
    public function handle(Request $request, Closure $next)
    {
        if (!Gate::allows('access-employer-zone')) {
            abort(403);
        }
        return $next($request);
    }
}
