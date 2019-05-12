<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $user = Auth::user();
        
        foreach ($roles as $role) {
            if ($user->role == $role) {
                $request->user_role = $user->role;
                return $next($request);
            }
        }
        // if( $user->role == 'admin' || $user->role == 'company_user' || $user->role == 'candidate_user' || $user->role == 'company_manager'){
        //     return $next($request);
        // }

        return response()->json([
            'message' => 'You do not have this right',
        ], 403);
    }
}
