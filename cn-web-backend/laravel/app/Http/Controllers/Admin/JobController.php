<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Job;
use App\Model\Company;
use App\Model\Notification;
use App\Model\UserCompany;
use App\Model\UserCategory;
use App\Model\Category;
use Illuminate\Support\Facades\DB;
use App\Services\PusherService;

class JobController extends Controller
{
    public function getJobsByCompany(Request $request) {
        $query = DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id')
                    ->where('company_id', $request->company_id);

        if ($request->has('title')) {
            $query->where('jobs.title', 'like', '%'.$request->title.'%');
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $query->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.name as name_company');

        return $query->orderBy('jobs.created_at', 'desc')->paginate($request->per_page);
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

        $companyId = $job->company_id;
        $companyName = Company::where('id', $companyId)->first()->name;
        $jobTitle = $job->title;
        $pusher = PusherService::createPusher();
        $notificationCompany = Notification::create([
                                'company_id' => $companyId,
                                'description' => $jobTitle . ' được chấp nhận.',
                                'status' => 0,
                                'job_id' => $job->id,
                            ]);
        $pusher->trigger('NotifyCompany' . $companyId, 'notify', $notificationCompany);
        $userIdFollowCompanys = UserCompany::where('company_id', $companyId)->get(['user_id']);
        if ($userIdFollowCompanys) {
            foreach ($userIdFollowCompanys as $userId) {
                $notificationUser = Notification::create([
                                    'user_id' => $userId->user_id,
                                    'company_id' => $companyId,
                                    'description' => $companyName . ' đã đăng job.',
                                    'status' => 0,
                                    'job_id' => $job->id,
                                ]);
                $pusher->trigger('NotifyUser' . $userId->user_id, 'notify', $notificationUser);
            }
        }

        $categoryId = $job->category_id;
        $categoryName = Category::where('id', $categoryId)->first()->name;
        $userIdFollowCategories = UserCategory::where('category_id', $categoryId)->get(['user_id']);
        if ($userIdFollowCategories) {
            foreach ($userIdFollowCategories as $userId) {
                $notificationUser = Notification::create([
                                    'user_id' => $userId->user_id,
                                    'company_id' => $companyId,
                                    'description' => $categoryName . 'có job mới.',
                                    'status' => 0,
                                    'job_id' => $job->id,
                                ]);
                $pusher->trigger('NotifyUser' . $userId->user_id, 'notify', $notificationUser);
            }
        }

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
