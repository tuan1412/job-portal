<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserCompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_company')->insert([
            'company_id' => 1,
            'user_id' => 1,
        ]);
    }
}
