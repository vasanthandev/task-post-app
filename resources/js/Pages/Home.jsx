import GuestLayout from "@/Layouts/GuestLayout";
import GuestPostLayout from "@/Layouts/GuestPostLayout";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

import PublicPost from "@/Components/app/PublicPost";
import Pagination from "@/Components/Pagination";

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
                <Pagination links={posts.meta.links} />
            </GuestPostLayout>
        </>
    );
}
