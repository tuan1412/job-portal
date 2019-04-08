<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SocialAuthController extends Controller
{
    public function authUsingSocial($platform, Request $request)
    {
        $accessToken = $request->get('accessToken');

        if ($platform == 'google') {
            $url = "https://www.googleapis.com/oauth2/v3/userinfo?access_token=$accessToken";
            $socialDetail = [
                'id' => 'sub',
                'first_name' => 'family_name',
                'last_name'  => 'given_name'
            ];
        }

        if ($platform == 'facebook') {
            $url = "https://graph.facebook.com/me?access_token=$accessToken&fields=name,id,email,last_name,first_name";
            $socialDetail = [
                'id' => 'id',
                'first_name' => 'first_name',
                'last_name'  => 'last_name'
            ];
        }

        $dataUser = $this->graphDataUser($url);

        $userSocial = User::where($platform.'_id', $dataUser[$socialDetail['id']])->first();

        if ($userSocial) {
            // create token send to client
        } else {
            // create user, then create token send to client
        }
    }

    public function graphDataUser($url)
    {
        try {
            return json_decode(file_get_contents($url), true);
        } catch (\ErrorException $e) {
            return $e;
        }
    }
}
