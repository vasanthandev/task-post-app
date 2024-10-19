<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InteraticePostResource extends JsonResource
{
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
            'is_liked' => $this->likes->count() > 0 ? true : false,
            // 'user_commenat' => $this->comments->where('user_id',$request->user()->id)->first(),
            'comments' => CommentResource::collection($this->comments),
            'likes_count' => $this->likes_count,
            'comments_count' => $this->comments_count,
            'user_name' => $this->user->name,

        ];
    }
}
