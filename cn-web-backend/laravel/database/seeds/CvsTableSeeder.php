<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CvsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cvs')->insert([
            'user_id' => '1',
            'name' => 'test',
            'path' => 'default',
            'status' => 0,
        ]);
    }
}
