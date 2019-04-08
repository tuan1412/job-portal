<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CompanyUser extends Model
{
    protected $fillable = [
        'id',
        'company_id',
        'username',
        'password',
        'fullname',
        'email',
        'gender',
        'role',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];
}
