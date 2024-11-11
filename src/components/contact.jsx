import {  useState } from "react";
import Button from "./button";
import emailjs from '@emailjs/browser';

export default function Contact(){
  const [buttonText, setButtonText] = useState('Submit');
  const sendEmail = (event) => {
    event.preventDefault();
    const from_name = document.getElementById('from_name').value;
    const from_email = document.getElementById('from_email').value;
    const from_number = document.getElementById('from_number').value;
    const message = document.getElementById('message').value;

    setButtonText('Sending Email...')
    
    emailjs.send('service_r6t2nx8', 'template_bku1eda', 
    {
      from_name,
      from_email,
      from_number,
      message
    }, 
    {
      publicKey: 'HTOKwwjpqSsZkM1gw',
    }).then(() => {
      // alert('Email Sent');
      setButtonText('Submit');
    }, (error) => {
      alert('ERROR: ', error.text);
    }
    )
  }
    return(
<div className="px-4 py-20 font-teko sm:px-6 md:py-32 lg:px-32 lg:py-40 mx-auto">
  <div className="mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[60%]">
        <h1 className="text-6xl font-bold text-skylerBlack sm:text-[110px]">
          We&#39;ve been waiting for you!
        </h1>
      </div>
      <div className="md:w-[40%] flex md:justify-end">
        <p className="mt-1 md:text-2xl text-xl md:w-[60%] text-gray-600">
          Contact us via the form below and get your ideas transformed into reality with our expert digital solutions.
        </p>
      </div>
    </div>

    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <div className="divide-y divide-gray-200">
        <div className=" flex gap-x-7 py-6">
          <svg className="shrink-0 size-6 mt-1.5 text-skylerBlack" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div className="grow flex flex-col">
            <h3 className="font-semibold text-3xl text-skylerBlack">We&#39;d love to talk about how we can help you.</h3>
            {/* <p className="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p> */}
            <span className="inline-block">
              <a href="tel:+91 7079872815" className="mt-2 underline hover:no-underline inline-flex items-center gap-x-2 text-2xl font-medium text-gray-600 hover:text-skylerBlack focus:outline-none focus:text-skylerBlack">
                +91 7079872815
              </a>
            </span>
            <span className="inline-block">
              <a href="mailto:skylerdevco@gmail.com" className="mt-2 underline hover:no-underline inline-flex items-center gap-x-2 text-2xl font-medium text-gray-600 hover:text-skylerBlack focus:outline-none focus:text-skylerBlack">
                skylerdevco@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
        <h2 className="mb-8 text-xl font-semibold text-skylerBlack">
          Fill in the form
        </h2>

        <form onSubmit={sendEmail}>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div>
                <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                <input type="text" name="from_name" id="from_name" className="py-3 px-4 block w-full focus:outline-none border-gray-500 border-b text-xl focus:border-skylerBlack focus:ring-skylerBlack disabled:opacity-50 disabled:pointer-events-none" placeholder="Name *" required />
              </div>
            </div>

            <div>
              <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
              <input type="email" name="from_email" id="from_email" autoComplete="email" className="py-3 px-4 block w-full focus:outline-none border-gray-500 border-b text-xl focus:border-skylerBlack focus:ring-skylerBlack disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />
            </div>

            <div>
              <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
              <input type="text" name="from_number" id="from_number" className="py-3 px-4 block w-full focus:outline-none border-gray-500 border-b text-xl focus:border-skylerBlack focus:ring-skylerBlack disabled:opacity-50 disabled:pointer-events-none" placeholder="WhatsApp Number *" required />
            </div>

            <div>
              <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
              <textarea id="message" name="message" rows="1" className="py-3 px-4 block w-full focus:outline-none border-gray-500 border-b text-xl focus:border-skylerBlack focus:ring-skylerBlack disabled:opacity-50 disabled:pointer-events-none" placeholder="Message"></textarea>
            </div>
          </div>

          <div className="mt-4 grid">
            {/* <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button> */}
            <Button id="submitButton" type="submit" content={buttonText} paddingX="" paddingY="" className="text-center" />
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We&#39;ll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}