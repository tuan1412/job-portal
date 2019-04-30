<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Support\Facades\Auth;
use App\Model\CandidateUser;
use App\Model\CV;

class MeController extends Controller
{
    public function index(Request $request)
    {
    	$user = Auth::user();

    	$userInfo = CandidateUser::where('user_id', $user->id)->first();
		$user->full_name   = $userInfo->full_name;
		$user->email       = $userInfo->email;
		$user->mobile      = $userInfo->mobile;
		$user->birthday    = $userInfo->birthday;
		$user->description = $userInfo->description;
		$user->path_avatar = $userInfo->path_avatar;

		$user->list_cvs = CV::where('user_id', $user->id)->get();

		return response()->json([
            'user'         => $user,
        ], 200);
	}
}
