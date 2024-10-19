import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function Post({post}) {

    return (
        <div className="mt-2">
            <Card border="info">
                <Card.Header as="h5">
                    <div className="flex items-center">
                        <div className="bg-orange-400 text-center p-3 mx-2 rounded-full">
                            Rv
                        </div>
                        {post.user_name}
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title> {post.tittle}</Card.Title>
                    <Card.Text> <div dangerouslySetInnerHTML={{ __html: post.body }} /></Card.Text>
                    <Card.Footer className="text-muted">
                        <Row className="justify-content-end">
                            <Col sm="auto"> {post.likes_count}</Col>
                            <Col sm="auto">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </Col>
                            <Col sm="auto">{post.comments_count}</Col>
                            <Col sm="auto">
                                <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}
