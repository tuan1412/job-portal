<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserCompany extends Model
{
    protected $table = 'user_company';

    protected $fillable = [
        'id',
        'user_id',
        'company_id',
        'cv_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
