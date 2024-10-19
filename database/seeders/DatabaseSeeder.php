<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(20)
            ->has(Post::factory()->count(2)) // Each user has 2 posts
            ->create();

        $users = User::inRandomOrder()->take(15)->get();

        $post = Post::inRandomOrder()->take(15)->get();

        $post->each(function($eachPhost) use($users){
            $users->each(function($user) use($eachPhost)
            {
                Like::factory()->create([
                    'user_id' => $user->id,
                    'post_id' => $eachPhost->id,
                ]);

                Comment::factory()->create([
                    'user_id' => $user->id,
                    'post_id' => $eachPhost->id,
                ]);
            });
        });

        // Create 20 likes for random posts and users
        // Like::factory(20)->create();

        // // Create 30 comments for random posts and users
        // Comment::factory(30)->create();
    }
}
