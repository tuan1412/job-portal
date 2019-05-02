<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
    	$query = DB::table('companies');

    	if ($request->has('name')) {
            $query->where('name', 'like', '%'.$request->name.'%');
        }
        if ($request->has('email')) {
            $query->where('email', 'like', '%'.$request->email.'%');
        }
        if ($request->has('website')) {
        	$query->where('website', 'like', '%'.$request->website.'%');
        }
        if ($request->has('title')) {
        	$query->where('title', 'like', '%'.$request->title.'%');
        }

        return $query->select('id', 'name', 'title', 'description', 'email', 'website', 'path_avatar')
                     ->orderBy('created_at', 'desc')
                     ->paginate($request->per_page);
    }
}
