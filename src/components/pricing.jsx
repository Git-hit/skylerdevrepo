import Button from "./button";

export default function Pricing() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>

                <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
                        <div className="h-2 bg-pink-500"></div>

                        <div className="flex flex-1 flex-col p-6 pt-8">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">Single</div>

                                <p className="mb-8 px-8 text-center text-gray-500">For single page websites</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Domain For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free E-mail Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Landing Page | Event Page etc.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                {/* <a href="#" className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">$0 / Free</a> */}
                                <Button content="Starting from ₹9999" ghost link="/contact" className="w-full" paddingX="px-8" paddingY="py-3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-skylerBlue">
                        <div className="bg-skylerBlue py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choice</div>

                        <div className="flex flex-1 flex-col p-6 pt-8">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">Sigma</div>

                                <p className="mx-auto mb-8 px-8 text-center text-gray-500">Most appropriate package for small to medium sized business</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Domain For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free E-mail Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Full Support</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Multiple Pages, E-Learning Website, Business Website etc.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                {/* <a href="#" className="block rounded-lg bg-skylerBlue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">$19</a> */}
                                <Button content="Starting from ₹24999" link="/contact" className="w-full" paddingX="px-8" paddingY="py-3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
                        <div className="h-2 bg-gray-800"></div>

                        <div className="flex flex-1 flex-col p-6 pt-8">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">Alpha</div>

                                <p className="mx-auto mb-8 px-8 text-center text-gray-500">For Industry Leaders</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Domain For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Free E-mail Hosting For First Year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Full Support</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                                        </svg>

                                        <span className="text-gray-600">Larger Projects, E-Commerce Websites, SaaS WebApps, etc.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                {/* <a href="#" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">$49</a> */}
                                <Button content="Get a quote" ghost link="/contact" className="w-full" paddingX="px-8" paddingY="py-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}