<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CVJob extends Model
{
    protected $table = 'cv_job';

    protected $fillable = [
    	'cv_id',
    	'job_id',
    	'status',
    ];

    protected $hidden = [
    	'created_at',
    	'updated_at',
    ];
}
