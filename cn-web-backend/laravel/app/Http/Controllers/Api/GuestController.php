<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;
use App\Model\CandidateUser;
use App\Model\CompanyUser;
use App\Model\Job;
use App\Model\Company;
use Illuminate\Support\Facades\DB;

class GuestController extends Controller
{
    public function getUserDetail(Request $request)
    {
    	$user = User::find($request->user_id);
    	if ($user->role == 'candidate_user') {
    		$userInfo = CandidateUser::where('user_id', $user->id)->first();
    		$user->full_name   = $userInfo->full_name;
    		$user->email       = $userInfo->email;
    		$user->mobile      = $userInfo->mobile;
    		$user->birthday    = $userInfo->birthday;
    		$user->description = $userInfo->description;
    		$user->path_avatar = $userInfo->path_avatar;
    	}

    	if ($user->role == 'company_user' || $user->role == 'company_manager') {
    		$userInfo = CompanyUser::where('user_id', $user->id)->first();
    		$user->company_name = Company::find($userInfo->company_id)->name;
    		$user->fullname     = $userInfo->fullname;
    		$user->email        = $userInfo->email;
    		$user->gender 	    = $userInfo->gender;
    	}

    	return response()->json([
            'user'         => $user,
        ], 200);
    }

    public function getJobDetail(Request $request)
    {
    	return DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id')
                    ->where('jobs.id', $request->job_id)
                    ->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.name as name_company')
                    ->get();
    }

    public function getCompanyDetail(Request $request)
    {
    	$company = Company::find($request->company_id);
    	return response()->json([
            'company' => $company,
        ], 200);
    }

    public function getCompany(Request $request)
    {
        $companyId = Company::where('title', $request->title)->first()->id;
        return response()->json([
            'company_id' => $companyId,
        ], 200);
    }
}
