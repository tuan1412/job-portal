<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CandidateUsersTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(CompanyUsersTableSeeder::class);
        $this->call(CvsTableSeeder::class);
        $this->call(JobsTableSeeder::class);
        $this->call(UserCompanyTableSeeder::class);
    }
}
