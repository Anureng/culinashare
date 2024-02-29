// "use client";
// import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import { cn } from "@/lib/utils";
// import Navbar from "./Navbar";

// export function BackgroundBoxesDemo() {
//     return (
//         <>

//             <div className="bg-slate-900   overflow-hidden  flex flex-col  w-full h-svh ">
//                 <div className=" border border-red-900 flex flex-col items-center justify-center h-screen">
//                     <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
//                     <BackgroundBeams />
//                     <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
//                         Welcome to CulinaShare
//                     </h1>
//                     <p className="text-center mt-2 text-neutral-300 relative z-20">
//                         Framer motion is the best animation library ngl
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/56Y9Fu9uTu4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <section className="w-full py-12 lg:mt-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-[3/2] "
                        height="550"
                        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Share your culinary masterpieces with the world
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Capture the essence of your cooking and connect with food lovers. From family recipes to gourmet
                                experiments, every dish has a story.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="AddData"
                            >
                                Add a Recipe
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="AllData"
                            >
                                Explore Recipes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




