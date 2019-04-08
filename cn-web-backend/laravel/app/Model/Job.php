<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title',
        'category_id',
        'address',
        'from_salary',
        'to_salary',
        'expire_date',
        'company_id',
        'description',
        'status',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
