/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wSR1tfs37NK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import Link from "next/link"

export default function Component() {
    return (
        <>
            <Navbar />
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <img
                            alt="Delicious Food"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Taste of Tradition</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Explore our culinary heritage and savor the flavors that define us. From classic recipes to modern
                                    twists, we bring you the best of our kitchen.
                                </p>
                            </div>
                            <ul className="grid gap-2 py-4">
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Handcrafted dishes made with fresh, locally sourced ingredients.
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    A diverse menu that caters to every palate, from comfort food to gourmet delights.
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Immerse yourself in a dining experience that celebrates tradition and innovation.
                                </li>
                            </ul>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="AllData"
                                >
                                    Explore Menu
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
