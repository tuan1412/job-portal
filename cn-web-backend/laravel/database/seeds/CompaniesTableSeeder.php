<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            [
                'name' => 'company_test',
                'title' => 'test',
                'description' => 'des_test',
                'email' => 'abc@gmail.com',
                'website' => 'test.com',
                'path_avatar' => 'default'
            ],
            [
                'name' => 'company_test1',
                'title' => 'test1',
                'description' => 'des_test1',
                'email' => 'abc@gmail.com',
                'website' => 'test.com',
                'path_avatar' => 'default'
            ],
            [
                'name' => 'company_test2',
                'title' => 'test2',
                'description' => 'des_test2',
                'email' => 'abc@gmail.com',
                'website' => 'test.com',
                'path_avatar' => 'default'
            ],
        ]);
    }
}
