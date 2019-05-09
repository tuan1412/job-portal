<?php

namespace App\Http\Controllers\CompanyUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CVController extends Controller
{
    public function index(Request $request)
    {
        return  DB::table('cvs')
		        	->join('cv_job', 'cv_job.cv_id', '=', 'cvs.id')
		        	->join('candidate_users', 'candidate_users.user_id', '=', 'cvs.user_id')
		        	->where('cv_job.job_id', $request->job_id)
		        	->select('name', 'path', 'cvs.user_id', 'full_name')
					->orderBy('cvs.created_at', 'desc')
		        	->paginate($request->per_page);
    }
}
