<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\CandidateUser;
use App\Model\CompanyUser;
use App\Model\Company;

class AuthController extends Controller
{
    public function loginCandidateUser(Request $request)
    {
        $rules = [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ];

        $input = $request->only('email', 'password');

        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            return JsonReturn::error($validator->messages());
        }

        $credentials = [
            'email'    => $request->email,
            'password' => $request->password,
        ];

        if (!$token = auth()->attempt($credentials)) {
            return abort(400, trans('http.400'));
        }

        $user = CandidateUser::where([
            'email' => $request->email, 
            'password' => $request->password
        ])->first();
        
        return response()->json([
            'user' => $user,
            'access_token' => $userInfo['token'],
        ], 200);
    }

    public function loginCompanyUser(Request $request)
    {
        $rules = [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ];

        $input = $request->only('email', 'password');

        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            return JsonReturn::error($validator->messages());
        }

        $credentials = [
            'email'    => $request->email,
            'password' => $request->password,
        ];

        if (!$token = auth()->attempt($credentials)) {
            return abort(400, trans('http.400'));
        }

        $user = CompanyUser::where([
            'email' => $request->email, 
            'password' => $request->password
        ])->first();
        
        return response()->json([
            'user' => $user,
            'access_token' => $userInfo['token'],
        ], 200);
    }

    public function signupCandidateUser(Request $request)
    {
        $user = CandidateUser::create([
            'username' => $request->username,
            'password' => \bcrypt($request->password),
            'full_name' => $request->full_name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'birthday' => $request->birthday,
            'description' => $request->description,
            'role' => 4,
            'path_avatar' => 'default',
        ]);

        return response()->json([
            'message' => 'Signup successfully',
            'status'  => 1,
            'user'    => $user,
        ], 201);
    }

    public function signupCompanyUser(Request $request)
    {
        $company = Company::where('name', $request->company_name)->first();
        if ($company) {
            return response()->json([
                'message' => 'Company existed',
                'status'  => 0,
            ], 409);
        } else {
            $company = Company::create([
                'name'        => $request->company_name,
                'title'       => $request->company_title,
                'description' => $request->company_description,
                'email'       => $request->company_email,
                'website'     => $request->company_website,
                'path_avatar' => 'default',
            ]);
            $user = CompanyUser::create([
                'company_id'  => $company->id,
                'username'    => $request->username,
                'password'    => \bcrypt($request->password),
                'fullname'    => $request->fullname,
                'email'       => $request->email,
                'gender'      => $request->gender,
                'role'        => 2,
            ]);
        }

        return response()->json([
            'message' => 'Signup successfully',
            'status'  => 1,
            'user'    => $user,
        ], 201);
    }

    public function logout(Request $request)
    {
        
    }
}
