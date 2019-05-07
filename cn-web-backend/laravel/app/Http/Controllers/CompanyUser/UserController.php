<?php

namespace App\Http\Controllers\CompanyUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\CompanyUser;
use App\Model\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return DB::table('company_users')
                    ->join('users', 'users.id', '=', 'company_users.user_id')
                    ->where('company_id', $request->company_id)
                    ->select('users.id', 'username','fullname', 'email', 'gender')
                    ->paginate(12);
    }

    public function create(Request $request)
    {
        if (User::where('id', Auth::id())->first()->role != 'company_manager') {
            return response()->json([
                'message' => 'This user cannot create user',
                'status'  => 0,
            ], 400);
        }
        if (User::where('username', $request->username)->first()) {
            return response()->json([
                'message' => 'Username existed',
                'status'  => 0,
            ], 400);
        }

        $user = User::create([
            'username' => $request->username,
            'password' => \bcrypt($request->password),
            'role'     => 'company_user',
        ]);

        CompanyUser::create([
            'company_id'  => $request->company_id,
            'user_id'     => $user->id,
            'fullname'    => $request->fullname,
            'email'       => $request->email,
            'gender'      => $request->gender,
        ]);

        return response()->json([
            'message' => 'Create user successfully',
            'status'  => 1,
        ], 201);
    }

    public function update(Request $request)
    {
       $user = User::find($request->user_id);
       $user->username = $request->username;
       $user->save();

       $companyUser = CompanyUser::where('user_id', $user->id)->first();
       $companyUser->fullname = $request->fullname;
       $companyUser->email = $request->email;
       $companyUser->gender = $request->gender;
       $companyUser->save();

        return response()->json([
            'message' => 'Update user successfully',
            'status'  => 1,
        ], 200);
    }

    public function delete(Request $request)
    {
        $user = User::find($request->user_id);
        CompanyUser::where('user_id', $request->user_id)->delete();
        $user->delete();

        return response()->json([
            'message' => 'Delete user successfully',
            'status'  => 1,
        ], 200);
    }
}
