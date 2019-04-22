<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'namespace'  => 'Auth',
    'prefix'     => 'auth',
], function () {
    //Route::post('{platform}', 'SocialAuthController@authUsingSocial');
    Route::post('login', 'AuthController@login');
    Route::post('candidate_user/signup', 'AuthController@signupCandidateUser');
    Route::post('company_user/signup', 'AuthController@signupCompanyUser');
});

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group([
        'namespace'  => 'Admin',
        'middleware' => 'role:admin',
        'prefix'     => 'admin',
    ], function () {
        Route::get('get_jobs/{company_id}', 'JobController@getJobsByCompany');
        Route::get('jobs', 'JobController@index');
        Route::post('accept_job', 'JobController@accept');
        Route::post('reject_job', 'JobController@reject');

        Route::post('ban_user', 'UserController@ban');
        Route::get('users', 'UserController@index');

        Route::get('companies', 'CompanyController@index');       
    });

    Route::group([
        'namespace'  => 'CompanyUser',
        'middleware' => 'role:company_user',
        'prefix'     => 'company_user',
    ], function () {
        Route::get('get_users', 'UserController@index');
        Route::post('create_user/{company_id}', 'UserController@create');
        Route::post('update_user/{user_id}', 'UserController@update');
        Route::delete('delete_user/{user_id}', 'UserController@delete');
    
        Route::post('create_job/{company_id}', 'JobController@create');
        Route::get('get_jobs', 'JobController@index');
        Route::post('update_job/{id}', 'JobController@update');
        Route::delete('delete_job/{id}', 'JobController@delete');
    
        Route::get('get_cv/{company_id}', 'CVController@index');
    });

    Route::group([
        'namespace'  => 'CandidateUser',
        'middleware' => 'role:candidate_user',
        'prefix'     => 'candidate_user',
    ], function () {
        Route::get('find_job', 'JobController@index');
        Route::get('find_job_advance', 'JobController@indexAdvance');
    
        Route::get('get_all_cv', 'CVController@getAll');
        Route::get('get_cv/{id}', 'CVController@index');
        Route::post('create_cv', 'CVController@create');
        Route::post('update_cv/{id}', 'CVController@update');
        Route::delete('delete_cv/{id}', 'CVController@delete');
        Route::post('apply_cv', 'CVController@apply');
    });
});

