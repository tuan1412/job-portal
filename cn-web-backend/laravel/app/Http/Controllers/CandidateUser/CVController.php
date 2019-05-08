<?php

namespace App\Http\Controllers\CandidateUser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\CV;
use Illuminate\Support\Facades\DB;
use App\Model\UserCompany;
use App\Services\UploadFileService;
use Illuminate\Support\Facades\Auth;

class CVController extends Controller
{
    private $uploadFileService;

    public function __construct(UploadFileService $uploadFileService)
    {
        $this->uploadFileService = $uploadFileService;
    }

    public function getAll(Request $request)
    {
        return DB::table('cvs')
                    ->where('user_id', Auth::id())
                    ->get(['id', 'name', 'path']);
    }

    public function index(Request $request)
    {
        return DB::table('cvs')
                    ->where('id', $request->id)
                    ->get(['id', 'user_id', 'name', 'path', 'status']);
    }

    public function create(Request $request)
    {
        $cv = CV::create([
                'user_id' => Auth::id(),
                'name' => $request->name,
                'path' => $this->uploadFileService->store($request->cv),
                'status' => 0,
            ]);

        return response()->json([
            'message' => 'Create CV successfully',
            'status'  => 1,
            'cv'      => $cv
        ], 201);
    }

    public function update(Request $request)
    {
        if ($request->hasFile('cv')) {
            CV::where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'path' => $this->uploadFileService->store($request->cv),
                ]);
        } else {
            CV::where('id', $request->id)
                ->update([
                    'name' => $request->name,
                ]);
        }

        $cv = CV::where('id', $request->id)->first();
        
        return response()->json([
            'message' => 'Update CV successfully',
            'status'  => 1,
            'cv'      => $cv
        ], 200);
    }

    public function delete(Request $request)
    {
        CV::where('id', $request->id)->delete();

        return response()->json([
            'message' => 'Delete CV successfully',
            'status'  => 1,
        ], 200);
    }

    public function apply(Request $request)
    {
        UserCompany::create([
            'user_id' => Auth::id(),
            'company_id' => $request->company_id,
            'cv_id' => $request->id,
        ]);

        return response()->json([
            'message' => 'Apply CV successfully',
            'status'  => 1,
        ], 201);
    }
}
