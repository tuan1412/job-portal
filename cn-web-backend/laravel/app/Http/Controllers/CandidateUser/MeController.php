<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Support\Facades\Auth;
use App\Model\CandidateUser;
use App\Model\CV;
use App\Services\UploadFileService;

class MeController extends Controller
{
	private $uploadFileService;

    public function __construct(UploadFileService $uploadFileService)
    {
        $this->uploadFileService = $uploadFileService;
    }

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

	public function updateInfo(Request $request)
	{
		CandidateUser::where('user_id', Auth::id())
					   ->update([
					   		'full_name'   => $request->full_name,
					   		'email' 	  => $request->email,
					   		'mobile'      => $request->mobile,
					   		'birthday'	  => $request->birthday,
					   		'description' => $request->description,
					   ]);
		$user = CandidateUser::where('user_id', Auth::id())->first();
		return response()->json([
            'user'         => $user,
        ], 200);
	}

	public function updateAvatar(Request $request)
	{
		if ($request->hasFile('avatar')) {
			CandidateUser::where('user_id', Auth::id())
						   ->update([
						   		'path_avatar' => $this->uploadFileService->store($request->avatar)
						   ]);
		}
		$user = CandidateUser::where('user_id', Auth::id())->first();
		return response()->json([
            'user'         => $user,
        ], 200);
	}
}
