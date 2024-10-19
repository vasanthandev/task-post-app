import React from "react";
import { Card } from "react-bootstrap";

function Comment({ comment }) {
    return (
        <Card className="my-2 p-2">
            <Card.Title>{comment.user_nanme}</Card.Title>
            <Card.Body>{comment.comment}</Card.Body>
        </Card>
    );
}

export default Comment;
