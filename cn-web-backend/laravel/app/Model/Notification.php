<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
    	'user_id',
    	'company_id',
    	'description',
    	'status',
    ];

    protected $hidden = [
    	'created_at',
    	'updated_at',
    ];
}
