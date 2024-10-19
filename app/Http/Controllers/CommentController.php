<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    public function Store(Request $request)  {

        $validated = $request->validate([
            'comment' => 'required|max:255',
            'post_id' => 'required',
        ]);
        DB::beginTransaction();
        try {
            $comment = new Comment();
            $comment->comment = $validated["comment"];
            $comment->post_id = $validated["post_id"];
            $comment->user_id = Auth::id();
            $comment->save();
            DB::commit();
            return back();

        } catch (\Throwable $th) {
            Log::error($th);
            DB::rollBack();
            return [
                 "status" => "error",
                 "message" => "please try later"
            ];
         }
    }
}
