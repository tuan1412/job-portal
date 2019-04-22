<?php

namespace App\Services;

use Illuminate\Http\Request;

class UploadFileService
{
    public function store($file)
    {
        $fileName = time().'.'.$file->getClientOriginalExtension();
        $file->move(public_path('files'), $fileName);
        return public_path('files').'/'.$fileName;
    }
}