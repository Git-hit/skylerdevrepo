import Button from "./button";

export default function BlogPostCTA (){

    return (
        <section className="font-teko left-10 lg:block hidden">
            <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-lg bg-gradient-to-b from-pink-500 to-yellow-500 md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-5xl text-white uppercase font-bold">
                            Let&#39;s Talk about your website
                        </h3>
                        {/* <p className="text-blue-100 text-xl leading-relaxed">
                            Get the most out of your budget with our expert digital solutions!
                        </p> */}
                    </div>
                    <div className="mt-6">
                        <Button content="Book a call" className="!bg-skylerBlack w-full" link="/contact" />
                        {/* <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                            No spam ever, we are care about the protection of your data.
                            Read our <a className="underline" href="javascript:void(0)"> Privacy Policy </a>
                        </p> */}
                    </div>
                </div>
                {/* <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div> */}
            </div>
        </section>
    )
}