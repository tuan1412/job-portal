<?php

namespace App\Http\Controllers\CompanyUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Job;
use App\Model\Category;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
    public function index(Request $request)
    {
        return DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id')
                    ->where(['company_id' => $request->company_id, 'status' => $request->status])
                    ->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.title as title_company')
                    ->paginate($request->per_page);
    }

    public function create(Request $request)
    {
        $category = Category::create([
            'name' => $request->category_name,
        ]);

        Job::create([
            'title' => $request->title,
            'category_id' => $category->id,
            'address' => $request->address,
            'from_salary' => $request->from_salary,
            'to_salary' => $request->to_salary,
            'expire_date' => $request->expire_date,
            'company_id' => $request->company_id,
            'description' => $request->description,
            'status' => 1,
        ]);

        return response()->json([
            'message' => 'Create job successfully',
            'status'  => 1,
        ], 201);
    }

    public function update(Request $request)
    {
        Job::where('id', $request->id)
            ->update([
                'title' => $request->title,
                'address' => $request->address,
                'from_salary' => $request->from_salary,
                'to_salary' => $request->to_salary,
                'expire_date' => $request->expire_date,
                'description' => $request->description,
                'status' => 0,
            ]);

        $job = Job::find($request->id);
        Category::where('id', $job->category_id)
            ->update([
                'name' => $request->category_name,
            ]);

        return response()->json([
            'message' => 'Update job successfully',
            'status'  => 1,
        ], 200);
    }

    public function delete(Request $request)
    {
        $job = Job::find($request->id);
        $categoryId = $job->category_id;
        $job->delete();
        Category::where('id', $categoryId)->delete();

        return response()->json([
            'message' => 'Delete job successfully',
            'status'  => 1,
        ], 200);
    }
}
