<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'username' => 'admin',
                'password' => bcrypt('123456'),
                'role'     => 'admin',
            ],
            [
                'username' => 'admin1',
                'password' => bcrypt('123456'),
                'role'     => 'admin',
            ],
            [
                'username' => 'company_user',
                'password' => bcrypt('123456'),
                'role'     => 'company_user',
            ],
            [
                'username' => 'company_user1',
                'password' => bcrypt('123456'),
                'role'     => 'company_user',
            ],
            [
                'username' => 'company_user2',
                'password' => bcrypt('123456'),
                'role'     => 'company_user',
            ],
            [
                'username' => 'company_user3',
                'password' => bcrypt('123456'),
                'role'     => 'company_user',
            ],
            [
                'username' => 'candidate_user',
                'password' => bcrypt('123456'),
                'role'     => 'candidate_user',
            ],
            [
                'username' => 'candidate_user1',
                'password' => bcrypt('123456'),
                'role'     => 'candidate_user',
            ],
            [
                'username' => 'candidate_user2',
                'password' => bcrypt('123456'),
                'role'     => 'candidate_user',
            ],
            [
                'username' => 'candidate_user3',
                'password' => bcrypt('123456'),
                'role'     => 'candidate_user',
            ],
        ]);
    }
}
