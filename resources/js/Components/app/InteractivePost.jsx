import React, { useEffect, useState } from "react";
import {
    Accordion,
    Button,
    Card,
    Col,
    Form,
    Row,
    useAccordionButton,
} from "react-bootstrap";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comment from "./Comment";
import AddComment from "./AddComment";
import axios from "axios";

function InteractivePost({ post }) {
    const [like, setLike] = useState({
        is_liked: post.is_liked,
        likes_count: post.likes_count,
    });

    useEffect(
        () =>
            setLike({
                is_liked: post.is_liked,
                likes_count: post.likes_count,
            }),
        []
    );

    const hitLiket = () => {
        axios({
            method: "post",
            url: route("post.like"),
            data: {
                post_id: post.id,
                is_liked: like.is_liked,
            },
        }).then(function (response) {
            setLike((prev) => {
                return {
                    is_liked: !prev.is_liked,
                    likes_count: !prev.is_liked
                        ? ++prev.likes_count
                        : --prev.likes_count,
                };
            });
        });
    };

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);
        return (
            <button type="button" onClick={decoratedOnClick}>
                {children}
            </button>
        );
    }
    return (
        <div className="mt-2">
            <Accordion>
                <Card border="info">
                    <Card.Header as="h5">
                        <div className="flex items-center">
                            <div className="bg-orange-400 text-center p-3 mx-2 rounded-full">
                                {post.user_name.slice(0, 2)}
                            </div>
                            {post.user_name}
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title> {post.tittle}</Card.Title>
                        <Card.Text>
                            {" "}
                            <div
                                dangerouslySetInnerHTML={{ __html: post.body }}
                            />
                        </Card.Text>
                        <Card.Footer className="text-muted">
                            <Row className="justify-content-md-end">
                                <Col xs={2} sm="auto">{like.likes_count}</Col>
                                <Col xs={2} sm="auto" onClick={hitLiket}>
                                    {like.is_liked ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderOutlinedIcon />
                                    )}
                                </Col>
                                <Col xs={2} sm="auto">{post.comments_count}</Col>
                                <Col xs={2} sm="auto">
                                    <CustomToggle eventKey="0">
                                        <ChatBubbleOutlineOutlinedIcon />
                                    </CustomToggle>
                                </Col>
                                <Accordion.Collapse eventKey="0" className="mt-2">
                                    <div>
                                        <AddComment post_id={post.id} />
                                        {post.comments.map(
                                            (eachCommend, index) => {
                                                return (
                                                    <Comment
                                                        key={index}
                                                        comment={eachCommend}
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                </Accordion.Collapse>
                            </Row>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Accordion>
        </div>
    );
}

export default InteractivePost;
