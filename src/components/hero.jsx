import { useEffect, useState } from "react";
import Button from "./button";
import { Helmet } from "react-helmet-async";

export default function Hero(){
    const [navbar, setNavbar] = useState(null);
    useEffect(() => {
        setNavbar(document.querySelector('.navbar'));
    }, [navbar])
    return(
        <div className="md:pt-[65px] px-5 relative w-full h-screen flex flex-col md:flex-row gap-7 justify-center items-center leading-[0.8]">
            <Helmet>
                <title>Skyler Dev</title>
                <meta name="description" content='We create websites that shine' />
                <meta property="og:title" content='Skyler Dev' />
                <meta property="og:description" content='We create websites that shine' />
            </Helmet>
            <div className="w-full md:w-1/4 z-10 lg:mx-36 flex flex-col justify-center items-start">
                <h1 className="font-teko font-[700] text-skylerBlack text-7xl md:text-9xl lg:text-[190px] uppercase">Websites <span className="text-transparent bg-clip-text bg-skylerBlue">that</span> shine</h1>
                <Button link="/contact" paddingX="px-16" paddingY="py-5" className="" content="Let&#39;s Talk" />
            </div>
            <div className="md:w-3/4">
                <video src="/heroMP4.mp4" playsInline muted autoPlay loop className="w-full h-full object-fill" />
            </div>
        </div>
    )
}