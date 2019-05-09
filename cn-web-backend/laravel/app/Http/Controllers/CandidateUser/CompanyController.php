<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\UserCompany;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function follow(Request $request)
    {
    	UserCompany::create([
    		'user_id' => Auth::id(),
    		'company_id' => $request->company_id,
    	]);

    	return response()->json([
            'message' => 'Follow company successfully',
        ], 200);
    }

    public function unfollow(Request $request)
    {
    	UserCompany::where(['user_id' => Auth::id(), 'company_id' => $request->company_id])
    				->delete();

    	return response()->json([
            'message' => 'Unfollow company successfully',
        ], 200);
    }

    public function checkFollow(Request $request)
    {
    	$check = UserCompany::where(['user_id' => Auth::id(), 'company_id' => $request->company_id])->first();
    	if ($check) {
    		return response()->json([
	            'status' => 'true',
	        ], 200);
    	}
    	return response()->json([
	            'status' => 'false',
	        ], 200);
    }
}
