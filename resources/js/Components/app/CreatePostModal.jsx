import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Editor from "react-simple-wysiwyg";
import { useForm } from "@inertiajs/react";

export const CreatePostModal = () => {
    const [show, setShow] = useState(false);

    const toggleModel = () => setShow(!show);

    const { data, setData, post, processing, errors } = useForm({
        tittle: "tittle",
        body: "body",
    });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(route("post.store"));
        post(route("post.store"), {
            preserveScroll: true,
            onSuccess: (res) => {
                setShow(false);
            },
        });
    };

    return (
        <>
            <Button variant="outline-secondary" size="lg" onClick={toggleModel}>
                create
                <AddCircleIcon fontSize="large" />
                post
            </Button>

            <Modal show={show} onHide={toggleModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Create post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form validated={true} onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tittle</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Enter email"
                                isInvalid={true}
                                value={data.tittle}
                                onChange={(e) =>
                                    setData("tittle", e.target.value)
                                }
                                isValid={errors.tittle}
                            />
                            {errors.tittle && (
                                <div className="text-red-500">
                                    {errors.tittle}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Label>what's in your mind</Form.Label>
                            <Editor
                                value={data.body}
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                            />
                            {errors.body && (
                                <div className="text-red-500 pt-1">
                                    {errors.body}
                                </div>
                            )}
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={processing}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
