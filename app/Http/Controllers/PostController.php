<?php

namespace App\Http\Controllers;

use App\Http\Resources\InteraticePostResource;
use App\Http\Resources\PostResource;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PostController extends Controller
{
    public function Index(Request $request)
    {
        $posts = Post::with(['user',
        'likes' => function($query) {
            $query->where('user_id', Auth::id());
        },
        'comments.user',
        ])->withCount(['likes','comments'])->latest()->paginate(10);

        return Inertia::render('Post/Index',[
            "posts"=> InteraticePostResource::collection($posts)
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

    public function Like(Request $request)
    {
        $validated = $request->validate([
            'post_id' => 'required',
            'is_liked' => 'required|boolean',
        ]);
        DB::beginTransaction();
        try {
            if(!$validated["is_liked"])
            {
                $like = new Like();
                $like->post_id = $validated["post_id"];
                $like->user_id = Auth::id();
                $like->save();
            }
            else{
                $like = Like::where('post_id',$validated["post_id"])->where('user_id',Auth::id())->delete();
            }

            DB::commit();
            return[
                "status" => "done",
                "message" => "done"
            ];

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
