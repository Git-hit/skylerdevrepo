import { useEffect, useRef } from "react";
import Button from "./button";

export default function Popup() {
    const popup = useRef();

    useEffect(() => {
        if(popup.current){
            popup.current.style.visibility = 'hidden';
            popup.current.style.opacity = '0';
            setTimeout(() => {
                popup.current.style.visibility = 'visible';
                popup.current.style.opacity = '1';
            }, 5000);
        }
    }, [])

    function handleClose(){
        popup.current.style.visibility = 'hidden';
        popup.current.style.opacity = '0';
    }

    return (
        <div ref={popup} className="transition-all duration-300 w-full h-screen bg-[rgb(0,0,0,0.5)] fixed flex justify-center items-center pt-0">
            <div className="w-full md:w-3/4 lg:w-1/2 justify-center items-center h-2/3">
                <div className="w-full h-full flex relative justify-center items-center">
                    <section className="bg-white overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
                        <img
                            alt="Best Web Development Services"
                            src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                            className="h-32 w-full object-cover md:h-full"
                        />

                        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                            <p className="text-sm font-semibold uppercase tracking-widest">Increase your sales & revenue</p>
                            <h2 className="mt-6 uppercase">
                                <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get your website now</span>
                                <span className="mt-2 block text-sm">Contact us via the button below <br /> or <br /> call now: <a href="tel:+91 7079872815" className="underline">+91 7079872815</a></span>
                            </h2>
                            <Button link="/contact" content="Book Now" className="uppercase mt-8 inline-block w-full" />
                            <p onClick={handleClose} className="mt-8 text-xs underline cursor-pointer font-medium uppercase text-gray-400">
                                I will think about it later
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}