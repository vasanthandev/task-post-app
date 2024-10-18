<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
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
        $a = 10;
        Log::info("message");
        Log::info("message",$request->all());
    }
}
