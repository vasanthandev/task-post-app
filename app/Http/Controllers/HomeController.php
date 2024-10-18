<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function Index(Request $request)
    {
        $post = Post::with(['likes','comments'])->paginate(10);

        return Inertia::render('Home',[
            'data' => $post
        ]);
    }

}
