import { useForm } from "@inertiajs/react";
import { Button, Form } from "react-bootstrap";

function AddComment({post_id}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        comment: "",
        post_id : post_id
    });

    const submitForm = (e) => {
        e.preventDefault();
        post(route("comment.store"), {
            data: { comment: data.comment },
            preserveScroll: true,
            onSuccess: (res) => {
                reset();
            },
        });
    };
    return (
        <Form validated={true} onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    required
                    placeholder="Enter comment"
                    value={data.comment}
                    onChange={(e) => setData("comment", e.target.value)}
                    isValid={errors.comment}
                />
                {errors.comment && (
                    <div className="text-red-500">{errors.comment}</div>
                )}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={processing}>
                Submit
            </Button>
        </Form>
    );
}

export default AddComment;
