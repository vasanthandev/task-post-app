import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { CreatePostModal } from "@/Components/app/CreatePostModal";
import InteractivePost from "@/Components/app/InteractivePost";
// import Pagination from "@/Components/Pagination";
import Pagination from "react-bootstrap/Pagination";
// import { Pagination as BootPagination } from "react-bootstrap/Pagination";
function Index({ posts }) {
    console.log(posts);
    return (
        <AuthenticatedLayout>
            <Head title="Post" />

            <div className="">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col py-2">
                        <CreatePostModal />
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {posts.data.length ? (
                                <div className="flex flex-col ">
                                    {/* <Post /> */}
                                    {posts.data.map((eachPost) => {
                                        return (
                                            <InteractivePost
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
                                        <img
                                            src="img\no_post_yet.png"
                                            alt="Logo"
                                        />
                                    </div>
                                    <p className="text-center">
                                        There is no post yet !
                                    </p>
                                </div>
                            )}
                            {/* <Pagination links={posts.meta.links} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
