<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Model\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return DB::table('users')
                    ->whereIn('role', ['candidate_user', 'company_user'])
                    ->select('id', 'username', 'role')
                    ->paginate(10);
    }

    public function ban(Request $request)
    {
        $user = User::find($request->user_id);

        if (!$user) {
            return response()->json([
                'message' => 'User is not exist',
                'status'  => 0,
            ], 400);
        }

        if ($user->role == 'candidate_user' || $user->role == 'company_user') {
            $user->role = 'inactive';
            $user->save();
        } else {
            return response()->json([
                'message' => 'Can not ban this user',
                'status'  => 0,
            ], 403);
        }
          
        return response()->json([
            'message' => 'User is banned',
            'status'  => 1,
        ], 200);
    }
}
