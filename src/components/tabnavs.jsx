import { ChevronsUp, Eye, Sparkles } from "lucide-react";
import { useEffect, useState } from "react"

export default function TabNavs(){
    const [image, setImage] = useState();
    const [activeTab, setActiveTab] = useState();

    const imageURLs = [
        "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
        "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
        "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
    ]

    useEffect(() => {
        setImage(imageURLs[0]);
        setActiveTab(0);
    }, [])

    function setImageURL(imageSRC, index){
        setImage(imageSRC);
        setActiveTab(index)
    }
    return(
<div className="max-w-[85rem] font-teko px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-6 md:p-12">
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-4xl text-skylerBlack font-bold uppercase sm:text-6xl">
          Empowering your business!
        </h2>
        <nav className="grid mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
          {imageURLs.map((url, i) => {
            return(
                <button key={i} type="button" onClick={() => setImageURL(url, i)} className={`${activeTab === i ? 'border-skylerBlue' : null} group transition-all duration-300 hover:border-skylerBlue text-start px-4 py-5 md:px-5 md:py-6 border-r`} id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                <span className="flex gap-x-4 justify-center items-start">
                    {
                        i === 0 ?
                            <span className={`group-hover:bg-skylerBlue rounded-full p-3 transition-all duration-300 ${activeTab === i ? 'bg-skylerBlue' : null}`}>
                                <Eye className={`transition-all duration-300 ${activeTab === i ? 'text-white' : null} group-hover:text-white text-skylerBlack`} />
                            </span>
                        :
                        i === 1 ? 
                            <span className={`group-hover:bg-skylerBlue rounded-full p-3 transition-all duration-300 ${activeTab === i ? 'bg-skylerBlue' : null}`}>
                                <Sparkles className={`transition-all duration-300 ${activeTab === i ? 'text-white' : null} group-hover:text-white text-skylerBlack`} />
                            </span>
                        :
                            <span className={`group-hover:bg-skylerBlue rounded-full p-3 transition-all duration-300 ${activeTab === i ? 'bg-skylerBlue' : null}`}>
                                <ChevronsUp className={`transition-all duration-300 ${activeTab === i ? 'text-white' : null} group-hover:text-white text-skylerBlack`} />
                            </span>
                    }
                    <span className="grow">
                        <span className={`block text-4xl uppercase font-semibold ${activeTab === i ? 'text-skylerBlue' : null} group-hover:text-skylerBlue text-skylerBlack`}>
                            {
                                i === 0 ?
                                    'Creartive Solutions'
                                : 
                                i === 1 ?
                                    'Fast & Reliable'
                                : 
                                    'Built For the Future'
                            }
                        </span>
                        <span className="block mt-1 text-xl text-skylerBlack">
                            {
                                i == 0 ?
                                    'Unique, eye-catching websites that reflect your brand.'
                                :
                                i === 1 ?
                                    'Quick-loading sites for a smooth user experience.'
                                :
                                    'Modern websites built to grow with your business.'
                            }
                        </span>
                    </span>
                </span>
                </button>
            )
          })}
        </nav>
      </div>

      <div className="lg:col-span-6">
        <div className="relative">
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl" src={image} alt="Features Image" />
            </div>
          </div>
          <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}