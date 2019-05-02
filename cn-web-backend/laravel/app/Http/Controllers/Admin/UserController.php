<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Model\User;

class UserController extends Controller
{
    public function indexCompanyUsers(Request $request)
    {
        $query = DB::table('company_users')
                    ->join('users', 'users.id', '=', 'company_users.user_id');

        if ($request->has('fullname')) {
            $query->where('fullname', 'like', '%'.$request->fullname.'%');
        }
        if ($request->has('email')) {
            $query->where('email', 'like', '%'.$request->email.'%');
        }
        if ($request->has('company_id')) {
            $query->where('company_id', $request->company_id);
        }
        if ($request->has('username')) {
            $query->where('username', 'like', '%'.$request->username.'%');
        }
        $query->select('users.id', 'username', 'company_id', 'fullname', 'email', 'gender', 'role');

        return $query->paginate($request->per_page);
    }

    public function indexCandidateUsers(Request $request)
    {
        $query = DB::table('candidate_users')
                    ->join('users', 'users.id', '=', 'candidate_users.user_id');
                    
        if ($request->has('username')) {
            $query->where('username', 'like', '%'.$request->username.'%');
        }
        if ($request->has('full_name')) {
            $query->where('full_name', 'like', '%'.$request->full_name.'%');
        }
        if ($request->has('email')) {
            $query->where('email', 'like', '%'.$request->email.'%');
        }
        $query->select('users.id', 'username', 'full_name', 'email', 'mobile', 'birthday', 'description', 'role');

        return $query->paginate($request->per_page);
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
