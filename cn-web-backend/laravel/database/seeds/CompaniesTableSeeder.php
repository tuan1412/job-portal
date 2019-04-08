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
            'id' => 1,
            'name' => 'company_test',
            'title' => 'test',
            'description' => 'des_test',
            'email' => 'abc@gmail.com',
            'website' => 'test.com',
            'path_avatar' => 'default'
        ]);
    }
}
