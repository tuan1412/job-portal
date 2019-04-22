<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
        return DB::table('companies')
                    ->select('id', 'name', 'title', 'description', 'email', 'website', 'path_avatar')
                    ->orderBy('created_at', 'desc')
                    ->paginate(10);
    }
}
