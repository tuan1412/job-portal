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

Route::post('find_job', 'CandidateUser\JobController@index');
Route::post('find_job_advance', 'CandidateUser\JobController@indexAdvance');
Route::get('get_list_categories', 'CandidateUser\JobController@getListCategories');
Route::get('get_user_detail/{user_id}', 'Api\GuestController@getUserDetail');
Route::get('get_job_detail/{job_id}', 'Api\GuestController@getJobDetail');
Route::get('get_company_detail/{company_id}', 'Api\GuestController@getCompanyDetail');
Route::post('get_company', 'Api\GuestController@getCompany');

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group([
        'namespace'  => 'Admin',
        'middleware' => 'role:admin',
        'prefix'     => 'admin',
    ], function () {
        Route::post('get_jobs/{company_id}', 'JobController@getJobsByCompany');
        Route::post('jobs', 'JobController@index');
        Route::post('accept_job', 'JobController@accept');
        Route::post('reject_job', 'JobController@reject');

        Route::post('ban_user', 'UserController@ban');
        Route::post('company_users', 'UserController@indexCompanyUsers');
        Route::post('candidate_users', 'UserController@indexCandidateUsers');

        Route::post('companies', 'CompanyController@index');       
    });

    Route::group([
        'namespace'  => 'CompanyUser',
        'middleware' => 'role:company_user,company_manager',
        'prefix'     => 'company_user',
    ], function () {
        Route::post('get_users', 'UserController@index');
        Route::post('create_user/{company_id}', 'UserController@create');
        Route::post('update_user/{user_id}', 'UserController@update');
        Route::delete('delete_user/{user_id}', 'UserController@delete');
    
        Route::post('create_job/{company_id}', 'JobController@create');
        Route::post('get_jobs', 'JobController@index');
        Route::post('update_job/{id}', 'JobController@update');
        Route::delete('delete_job/{id}', 'JobController@delete');
    
        Route::post('get_cv', 'CVController@index');
        Route::post('reject_cv/{id}', 'CVController@reject');
        Route::post('accept_cv/{id}', 'CVController@accept');

        Route::post('update_info', 'MeController@updateInfo');
    });

    Route::group([
        'namespace'  => 'CandidateUser',
        'middleware' => 'role:candidate_user',
        'prefix'     => 'candidate_user',
    ], function () { 
        Route::post('create_cv', 'CVController@create');
        Route::post('update_cv/{id}', 'CVController@update');
        Route::delete('delete_cv/{id}', 'CVController@delete');
        Route::post('apply_cv', 'CVController@apply');
        Route::get('get_all_cv', 'CVController@getAll');
        Route::get('get_cv/{id}', 'CVController@index');
        Route::post('check_cv_applied', 'CVController@checkCVApplied');

        Route::get('detail', 'MeController@index');
        Route::post('update_info', 'MeController@updateInfo');
        Route::post('update_avatar', 'MeController@updateAvatar');

        Route::post('follow_company', 'CompanyController@follow');
        Route::post('unfollow_company', 'CompanyController@unfollow');
        Route::post('check_follow_company', 'CompanyController@checkFollow');

        Route::post('follow_category', 'CategoryController@follow');
        Route::post('unfollow_category', 'CategoryController@unfollow');
        Route::post('check_follow_category', 'CategoryController@checkFollow');
    });

    Route::group([
        'middleware' => 'role:company_user,company_manager,candidate_user'
    ], function () {
        Route::get('get_notification', 'Api\NotificationController@getNotification');
        Route::post('change_status_notification', 'Api\NotificationController@changeStatus');
    });
});

