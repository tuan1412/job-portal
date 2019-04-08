<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jobs')->insert([
            'company_id' => 1,
            'category_id' => 3,
            'title' => 'default',
            'address' => 'HN',
            'from_salary' => 1000,
            'to_salary' => 2000,
            'expire_date' => '2019-04-20',
            'description' => 'test',
            'status' => 0,
        ]);
    }
}
