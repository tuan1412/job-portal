<?php

namespace App\Http\Controllers\CompanyUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\CompanyUser;
use Illuminate\Support\Facades\Auth;

class MeController extends Controller
{
    public function updateInfo(Request $request)
    {
    	CompanyUser::where('user_id', Auth::id())
    				->update([
    					'fullname' => $request->fullname,
    					'email'	   => $request->email,
    					'gender'   => $request->gender,
    				]);
    	$user = CompanyUser::where('user_id', Auth::id())->first();
    	return response()->json([
            'user'         => $user,
        ], 200);
    }
}
