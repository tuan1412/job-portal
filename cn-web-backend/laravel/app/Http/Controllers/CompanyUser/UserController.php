<?php

namespace App\Http\Controllers\CompanyUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\CompanyUser;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return DB::table('company_users')
                    ->where(['company_id' => $request->company_id, 'role' => 3])
                    ->get(['id', 'username', 'fullname', 'email', 'gender']);
    }

    public function create(Request $request)
    {
        CompanyUser::create([
            'username' => $request->username,
            'password' => \bcrypt('123456'),
            'fullname' => $request->fullname,
            'email' => $request->email,
            'gender' => $request->gender,
            'company_id' => $request->company_id,
            'role' => 3,
        ]);

        return response()->json([
            'message' => 'Create user successfully',
            'status'  => 1,
        ], 201);
    }

    public function update(Request $request)
    {
        CompanyUser::where('id', $request->user_id)
            ->update([
                'username' => $request->username,
                'fullname' => $request->fullname,
                'email' => $request->email,
                'gender' => $request->gender,
            ]);

        return response()->json([
            'message' => 'Update user successfully',
            'status'  => 1,
        ], 200);
    }

    public function delete(Request $request)
    {
        CompanyUser::where('id', $request->user_id)->delete();

        return response()->json([
            'message' => 'Delete user successfully',
            'status'  => 1,
        ], 200);
    }
}
