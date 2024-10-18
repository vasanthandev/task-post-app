import GuestLayout from "@/Layouts/GuestLayout";
import GuestPostLayout from "@/Layouts/GuestPostLayout";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Home({ data, links }) {
    console.log(data);

    return (
        <>
            <GuestPostLayout>
                <Head title="Home" />
                <div className="container mx-auto">
                    {data.lenght ? (
                        <div className="flex flex-col">

                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-center">
                                <img src="img\no_post_yet.png" alt="Logo" />
                            </div>
                            <p className="text-center">There is no post yet !</p>
                        </div>
                    )}
                </div>
            </GuestPostLayout>
        </>
    );
}
