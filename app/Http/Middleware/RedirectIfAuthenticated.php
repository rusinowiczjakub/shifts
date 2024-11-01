<?php

namespace App\Http\Middleware;

use App\Models\Employer;
use App\Models\MedicalStaff;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        /** @var MedicalStaff|Employer $user */
        $user = Auth::user();
        foreach ($guards as $guard) {
            if ($user instanceof MedicalStaff) {
                return redirect(route('staff.profile.edit'));
            }

            if ($user instanceof Employer) {
                return redirect(route('employer.dashboard'));
            }
//            if (Auth::guard($guard)->check()) {
//                return redirect(RouteServiceProvider::HOME);
//            }
        }

        return $next($request);
    }
}
