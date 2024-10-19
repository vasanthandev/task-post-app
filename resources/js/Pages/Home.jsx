import GuestLayout from "@/Layouts/GuestLayout";
import GuestPostLayout from "@/Layouts/GuestPostLayout";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

import PublicPost from "@/Components/app/PublicPost";
import Pagination from "react-bootstrap/Pagination";

export default function Home({ posts, links }) {
    console.log(posts);

    return (
        <>
            <GuestPostLayout>
                <Head title="Home" />
                <div className="container mx-auto">
                    {posts.data.length ? (
                        <div className="flex flex-col ">
                            {/* <Post /> */}
                            {posts.data.map((eachPost) => {
                                return (
                                    <PublicPost
                                        post={eachPost}
                                        key={eachPost.id}
                                    />
                                );
                            })}
                            <div className="flex justify-center pt-2">
                                <Pagination>
                                    <Pagination>
                                        <Pagination.First>
                                            <Link
                                                preserveScroll
                                                href={posts.links.first}
                                                as="button"
                                            >
                                                First
                                            </Link>
                                        </Pagination.First>
                                        <Pagination.Prev>
                                            <Link
                                                preserveScroll
                                                href={posts.links.prev}
                                                as="button"
                                            >
                                                Prev
                                            </Link>
                                        </Pagination.Prev>
                                        <Pagination.Next>
                                            <Link
                                                preserveScroll
                                                href={posts.links.next}
                                                as="button"
                                            >
                                                Next
                                            </Link>
                                        </Pagination.Next>
                                        <Pagination.Last>
                                            <Link
                                                preserveScroll
                                                href={posts.links.last}
                                                as="button"
                                            >
                                                Last
                                            </Link>
                                        </Pagination.Last>
                                    </Pagination>
                                </Pagination>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-center">
                                <img src="img\no_post_yet.png" alt="Logo" />
                            </div>
                            <p className="text-center">
                                There is no post yet !
                            </p>
                        </div>
                    )}
                </div>
            </GuestPostLayout>
        </>
    );
}
