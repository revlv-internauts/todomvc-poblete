import { Head, Link } from "@inertiajs/react"

export default function Welcome() {
    return (
        <>
        <Head title="Welcome"/>
            <div className="h-screen flex items-center justify-center">
                <Link href="/todos">
                    <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-4xl">
                        Go to TodoMVC
                    </button>
                </Link>
            </div>
        </>
    )
}