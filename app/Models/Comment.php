<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes, HasFactory;

    public function post() : BelongsTo {
       return  $this->belongsTo(Post::class);
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }
}
