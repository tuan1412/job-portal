<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id')
                    ->where('status', 1);
        
        if ($request->has('title')) {
            $query->where('jobs.title', 'like', '%'.$request->title.'%');
        }

        if ($request->has('category')) {
            $query->where('categories.name', 'like', '%'.$request->category.'%');
        }

        if ($request->has('address')) {
            $query->where('jobs.address', 'like', '%'.$request->address.'%');
        }

        $query->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.title as title_company');
        
        return $query->orderBy('jobs.created_at', 'desc')->paginate($request->per_page);
    }

    public function indexAdvance(Request $request)
    {
        $query = DB::table('jobs')
                    ->join('categories', 'categories.id', '=', 'jobs.category_id')
                    ->join('companies', 'companies.id', '=', 'jobs.company_id')
                    ->where('status', 1);
        
        if ($request->has('title')) {
            $query->where('jobs.title', 'like', '%'.$request->title.'%');
        }

        if ($request->has('category')) {
            $query->where('categories.name', 'like', '%'.$request->category.'%');
        }

        if ($request->has('address')) {
            $query->where('jobs.address', 'like', '%'.$request->address.'%');
        }
        
        if ($request->has('from_salary')) {
            $query->where('from_salary', '>=', $request->from_salary);
        }

        if ($request->has('to_salary')) {
            $query->where('to_salary', '<=', $request->to_salary);
        }

        if ($request->has('expire_date')) {
            $query->where('expire_date', '>=', $request->expire_date);
        }

        $query->select('jobs.id', 'jobs.title as title_job', 'address', 'from_salary', 'to_salary', 'expire_date', 'status', 'jobs.description', 'categories.name as category_name', 'companies.title as title_company');

        return $query->orderBy('jobs.created_at', 'desc')->paginate($request->per_page);
    }

    public function getListCategories()
    {
        return DB::table('categories')->get(['id', 'name']);
    }
}
