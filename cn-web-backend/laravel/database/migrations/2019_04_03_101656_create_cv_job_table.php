<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCvJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cv_job', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('cv_id');
            $table->unsignedInteger('job_id');
            $table->boolean('status');

            $table->foreign('cv_id')->references('id')->on('cvs');
            $table->foreign('job_id')->references('id')->on('jobs');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}
