<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserCategory extends Model
{
    protected $table = 'user_category';

    protected $fillable = [
    	'user_id',
    	'category_id'
    ];

    protected $hidden = [
    	'created_at',
    	'updated_at'
    ];
}
