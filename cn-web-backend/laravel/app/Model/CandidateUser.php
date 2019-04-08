<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CandidateUser extends Model
{
    protected $fillable = [
        'id',
        'username',
        'password',
        'full_name',
        'email',
        'mobile',
        'birthday',
        'description',
        'role',
        'path_avatar',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];

    public function cvs()
    {
        return $this->hasMany(CV::class);
    }
}
