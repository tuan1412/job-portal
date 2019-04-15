<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Job;
use App\Model\Company;

class JobController extends Controller
{
    public function getJobsByCompany(Request $request) {
        if (!Company::where('id', $request->company_id)->first()) {
            return 201; 
        }
        return Job::where('company_id', $request->company_id)->paginate(5);
    }
}
