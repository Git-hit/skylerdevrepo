import Button from "./button";
import ClientAvatars from "./clientAvatars";

export default function WhoWeAre(){
    return(
        <div className="md:py-28 py-7 ms-3 md:ms-28">
            <span className="flex flex-col md:flex-row items-baseline md:space-x-4">
                <p className="font-teko font-[500] text-xl md:text-2xl uppercase">01 Who we are</p>
                <h1 className="font-[900] md:w-3/4 leading-[0.8] text-3xl md:text-[55px] lg:text-7xl uppercase">We are a creative digital agency specializing in <span className="">web design</span> and <span className="">development</span></h1>
            </span>
            <div className="md:py-28 py-7 flex flex-col md:gap-7 lg:gap-0 md:flex-row">
                <div className="lg:w-1/3">
                    <ClientAvatars />
                </div> 
                <div className="lg:w-1/3 md:w-1/2 py-7">
                    <p className="font-[500] text-neutral-700">
                        Your website is often the first impression customers get. 
                        A great site builds trust, engages visitors, and drives growth. 
                        At SkylerDev, we create websites that turn visitors into loyal customers and give your brand the credibility it deserves.
                    </p>
                    <div className="md:pt-36 py-7 md:text-left text-center">
                        <Button link="/contact" content="Let&#39;s Talk" className="uppercase" ghost rounded paddingX="px-14" paddingY="py-20" />
                    </div>
                </div>
            </div>
        </div>
    )
}