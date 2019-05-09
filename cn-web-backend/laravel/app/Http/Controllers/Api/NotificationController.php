<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Notification;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function getNotification(Request $request)
    {
    	$notification = Notification::where(['user_id' => Auth::id(), 'status' => 0])
    								 ->get();
    	if ($notification->isEmpty()) {
    		return response()->json([
	            'notification' => false,
	        ], 200);
    	}
    	return response()->json([
            'notification' => $notification,
        ], 200);
    }

    public function changeStatus(Request $request)
    {
    	$notification = Notification::where('id', $request->id)
    								 ->first();
    	$notification->status = 1;
    	$notification->save();
    	return response()->json([
            'message' => 'Change status successfully',
        ], 200);
    }
}
