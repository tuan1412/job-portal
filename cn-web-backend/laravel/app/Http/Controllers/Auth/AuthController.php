<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\CandidateUser;
use App\Model\CompanyUser;
use App\Model\Company;
use App\Model\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Services\UploadFileService;

class AuthController extends Controller
{
    private $uploadFileService;

    public function __construct(UploadFileService $uploadFileService)
    {
        $this->uploadFileService = $uploadFileService;
    }

    public function login(Request $request)
    {
        $rules = [
            'username'  => 'required',
            'password'  => 'required',
        ];

        $input = $request->only('username', 'password');

        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Username and password required',
                'status'  => 0,
            ], 400);
        }

        $credentials = [
            'username'  => $request->username,
            'password'  => $request->password,
        ];
        
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'message' => 'Bad request',
                'status'  => 0,
            ], 400);
        }
        
        $user = User::where('username', $request->username)->first();

        return response()->json([
            'access_token' => $token,
            'user'         => $user,
        ], 200);
    }

    public function signupCandidateUser(Request $request)
    {
        if (User::where('username', $request->username)->first()) {
            return response()->json([
                'message' => 'Username existed',
                'status'  => 0,
            ], 400);
        }

        $user = User::create([
            'username' => $request->username,
            'password' => \bcrypt($request->password),
            'role'     => 'candidate_user',
        ]);

        CandidateUser::create([
            'user_id'     => $user->id,
            'full_name'   => $request->full_name,
            'email'       => $request->email,
            'mobile'      => $request->mobile,
            'birthday'    => $request->birthday,
            'description' => $request->description,
            'path_avatar' => $this->uploadFileService->store($request->avatar),
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
            if (User::where('username', $request->username)->first()) {
                return response()->json([
                    'message' => 'Username existed',
                    'status'  => 0,
                ], 400);
            }

            $company = Company::create([
                'name'        => $request->company_name,
                'title'       => $request->company_title,
                'description' => $request->company_description,
                'email'       => $request->company_email,
                'website'     => $request->company_website,
                'path_avatar' => 'default',
            ]);

            $user = User::create([
                'username' => $request->username,
                'password' => \bcrypt($request->password),
                'role'     => 'company_user',
            ]);

            CompanyUser::create([
                'company_id'  => $company->id,
                'user_id'     => $user->id,
                'fullname'    => $request->fullname,
                'email'       => $request->email,
                'gender'      => $request->gender,
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
