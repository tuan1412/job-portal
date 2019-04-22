<?php

namespace App\Services;

use Pusher\Pusher;

class PusherService
{
    public static function createPusher()
    {
        $options = array(
            'cluster' => 'ap1',
            'encrypted' => false
        );

        $pusher = new Pusher(
            env('PUSHER_APP_KEY'),
            env('PUSHER_APP_SECRET'),
            env('PUSHER_APP_ID'),
            $options
        );

        return $pusher;
    }
}