<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PostController extends Controller
{
    public function Index(Request $request)
    {
        $post = Post::with(['likes','comments'])->paginate(10);

        return Inertia::render('Post/Index',[
            'data' => $post
        ]);
    }

    public function Store(Request $request)
    {
        $validated = $request->validate([
            'tittle' => 'required|max:25',
            'body' => 'required',
        ]);
        DB::beginTransaction();
        try {
            $post = new Post();
            $post->tittle = $validated["tittle"];
            $post->body = $validated["body"];
            $post->user_id = $request->user()->id;
            $post->save();
            DB::commit();
            return to_route('post.index');

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
