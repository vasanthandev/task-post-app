<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public static $wrap = true;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'tittle' => $this->tittle,
            'likes_count' => $this->likes_count,
            'comments_count' => $this->comments_count,
            'user_name' => $this->user->name,
        ];
    }
}
