import { useState } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [state, setState] = useState(false)
  
  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
    //   { title: "Recent Works", path: "javascript:void(0)" },
      { title: "Blog", path: "/blog" },
      { title: "Contact", path: "/contact" }
  ]

  return (
      <nav className="navbar z-20 bg-white w-full border-b fixed">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5">
                    <a className='flex items-center justify-between gap-3' href="/">
                        <img
                            src="/Skyler Dev Logo.png" 
                            width={40} 
                            height={40}
                            alt="Skyler Dev logo"
                        />
                        <h2 className='font-teko text-skylerBlack font-[700] text-3xl'>Skyler Dev</h2>
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 space-y-8 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                <li key={idx} className="text-gray-600 font-teko font-[400] text-[22px] hover:text-skylerBlack transition-all duration-300">
                                    <Link to={item.path}>
                                        { item.title }
                                    </Link>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <div className="inline-block md:hidden">
                        <Button link="/contact" content="Let&#39;s Talk" />
                    </div>
              </div>
              <div className="hidden md:inline-block">
                <Button link="/contact" content="Let&#39;s Talk" />
              </div>
          </div>
      </nav>
  )
}