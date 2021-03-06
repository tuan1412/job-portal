<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CompanyUser extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'company_id',
        'fullname',
        'email',
        'gender',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];
}
