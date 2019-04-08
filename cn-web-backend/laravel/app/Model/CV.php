<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    protected $table = 'cvs';

    protected $fillable = [
        'user_id',
        'name',
        'path',
        'status',
    ];

    protected $hidden = [
        'updated_at',
        'created_at',
    ];
}
