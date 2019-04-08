<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'id',
        'name',
        'title',
        'description',
        'email',
        'website',
        'path_avatar',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
