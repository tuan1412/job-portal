<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CandidateUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('candidate_users')->insert([
            [
                'user_id' => 7,
                'full_name' => 'Ha The Dang',
                'email' => 'dangars151@gmail.com',
                'mobile' => '12345678',
                'birthday' => '1997-01-15',
                'description' => 'test',
                'path_avatar' => 'default',
            ],
            [
                'user_id' => 8,
                'full_name' => 'Ha The Dang',
                'email' => 'dangars151@gmail.com',
                'mobile' => '12345678',
                'birthday' => '1997-01-15',
                'description' => 'test',
                'path_avatar' => 'default',
            ],
            [
                'user_id' => 9,
                'full_name' => 'Ha The Dang',
                'email' => 'dangars151@gmail.com',
                'mobile' => '12345678',
                'birthday' => '1997-01-15',
                'description' => 'test',
                'path_avatar' => 'default',
            ],
            [
                'user_id' => 10,
                'full_name' => 'Ha The Dang',
                'email' => 'dangars151@gmail.com',
                'mobile' => '12345678',
                'birthday' => '1997-01-15',
                'description' => 'test',
                'path_avatar' => 'default',
            ]
        ]);
    }
}
