<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [ 'name' => 'Lap trinh vien' ],
            [ 'name' => 'Tester' ],
            [ 'name' => 'Lap trinh vien 1' ],
            [ 'name' => 'Lap trinh vien 2' ],
            [ 'name' => 'Lap trinh vien 3' ],
            [ 'name' => 'Tester 1' ],
            [ 'name' => 'Tester 2' ],
            [ 'name' => 'Tester 3' ],
        ]);
    }
}
