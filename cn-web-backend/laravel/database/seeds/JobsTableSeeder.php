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
            [
                'company_id' => 1,
                'category_id' => 3,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1000,
                'to_salary' => 2000,
                'expire_date' => '2019-04-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 4,
                'title' => 'default',
                'address' => 'BN',
                'from_salary' => 1500,
                'to_salary' => 2000,
                'expire_date' => '2019-04-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 5,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1100,
                'to_salary' => 2000,
                'expire_date' => '2019-04-21',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 6,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1000,
                'to_salary' => 2500,
                'expire_date' => '2019-04-23',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 2,
                'category_id' => 3,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1000,
                'to_salary' => 2000,
                'expire_date' => '2019-04-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 2,
                'category_id' => 7,
                'title' => 'default',
                'address' => 'BN',
                'from_salary' => 1000,
                'to_salary' => 2000,
                'expire_date' => '2019-04-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 2,
                'category_id' => 8,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1200,
                'to_salary' => 2200,
                'expire_date' => '2019-04-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 1,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1000,
                'to_salary' => 2000,
                'expire_date' => '2019-05-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 2,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1300,
                'to_salary' => 2000,
                'expire_date' => '2019-06-20',
                'description' => 'test',
                'status' => 0,
            ],
            [
                'company_id' => 1,
                'category_id' => 4,
                'title' => 'default',
                'address' => 'HN',
                'from_salary' => 1600,
                'to_salary' => 2000,
                'expire_date' => '2019-04-25',
                'description' => 'test',
                'status' => 0,
            ],
        ]);
    }
}
