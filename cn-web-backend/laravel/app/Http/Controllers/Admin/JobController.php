<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Job;
use App\Model\Company;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
    public function getJobsByCompany(Request $request) {
        // if (!Company::where('id', $request->company_id)->first()) {
        //     return 201; 
        // }
        return Job::where('company_id', $request->company_id)->paginate(5);
    }

    public function index(Request $request) {
        $query = DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id');

        if ($request->has('title')) {
            $query->where('jobs.title', 'like', '%'.$request->title.'%');
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
                    
        $query->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.name as name_company');

        return $query->orderBy('jobs.created_at', 'desc')->paginate($request->per_page);
    }

    public function accept(Request $request)
    {
        $job = Job::find($request->job_id);

        if (!$job) {
            return response()->json([
                'message' => 'Job is not exist',
                'status'  => 0,
            ], 400);
        }

        $job->status = 1;
        $job->save();

        return response()->json([
            'message' => 'Job is accepted',
            'status'  => 1,
        ], 200);
    }

    public function reject(Request $request)
    {
        $job = Job::find($request->job_id);

        if (!$job) {
            return response()->json([
                'message' => 'Job is not exist',
                'status'  => 0,
            ], 400);
        }

        $job->status = 2;
        $job->save();

        return response()->json([
            'message' => 'Job is rejected',
            'status'  => 1,
        ], 200);
    }
}
