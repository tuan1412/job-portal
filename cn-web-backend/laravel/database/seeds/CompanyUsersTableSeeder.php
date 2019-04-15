<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanyUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company_users')->insert([
            'company_id' => 1,
            'user_id' => 1,
            'email' => 'abc@gmail.com',
            'fullname' => 'test',
            'gender' => 0,
        ]);
    }
}
