<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PusherService;

class SendMessageController extends Controller
{
    public function index()
    {
        return view('send_message');
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);
        
        $data['title'] = $request->input('title');
        $data['content'] = $request->input('content');

        $pusher = PusherService::createPusher();

        $pusher->trigger('Notify', 'send-message', $data);

        return redirect()->route('send');
    }
}
