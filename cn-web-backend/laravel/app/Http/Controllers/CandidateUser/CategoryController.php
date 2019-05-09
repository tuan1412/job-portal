<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\UserCategory;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function follow(Request $request)
    {
    	UserCategory::create([
    		'user_id' => Auth::id(),
    		'category_id' => $request->category_id,
    	]);

    	return response()->json([
            'message' => 'Follow category successfully',
        ], 200);
    }

    public function unfollow(Request $request)
    {
    	UserCategory::where(['user_id' => Auth::id(), 'category_id' => $request->category_id])
    				->delete();

    	return response()->json([
            'message' => 'Unfollow category successfully',
        ], 200);
    }

    public function checkFollow(Request $request)
    {
    	$check = UserCategory::where(['user_id' => Auth::id(), 'category_id' => $request->category_id])->first();
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
