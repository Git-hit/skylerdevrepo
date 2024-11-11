import { Focus, Layers3, LoaderPinwheel } from "lucide-react"

export default function Features(){

    const features = [
        {
            icon: <LoaderPinwheel />,
            title: "Modern Design",
            desc: "Sleek, responsive and SEO-ready designs that blend style and functionality for a seamless user experience."
        },
        {
            icon: <Focus />,
            title: "Expert Solutions",
            desc: "Tailored web solutions to elevate your business, with expert craftsmanship in every project."
        },
        {
            icon: <Layers3 />,
            title: "End-to-End Support",
            desc: "Comprehensive support from start to finish, ensuring your project runs smoothly at all times."
        }
    ]

    return (
        <section className="py-28 bg-[#0a0b0c]">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
                <div className="md:text-center font-teko text-white space-y-8">
                    <p className="text-6xl font-semibold sm:text-8xl">
                        Achieve your goals with us
                    </p>
                    <div className="flex md:justify-end">
                        <div className="md:w-1/2">
                            <p className="text-2xl text-gray-400 md:w-1/2 text-left">
                                Our hands on experience and creativity is what we use to power the web.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`group feature-${idx + 1} space-y-10 py-8 lg:px-12 sm:py-0`}>
                                    <div className="group-hover:bg-skylerBlue group-hover:border-skylerBlue duration-300 transition-all w-12 h-12 border text-white rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-4xl font-teko text-white font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}