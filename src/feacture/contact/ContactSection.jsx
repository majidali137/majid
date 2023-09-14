import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Heading from "../../ui/Heading";
export default function ContactSections() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6qrx78d', 'template_8iw40pv', form.current, 'KkdizfT8aJ5I_DHpQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className="pt-24">
        {/* contact Heading */}
        <Heading
          subHeading="Contact With Me"
          mainHeading="Have a Project in Mind?"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </section>

      {/* contact Form */}
      <form  ref={form} onSubmit={sendEmail} id="contact" className="space-y-8 divide-y sm:px-10 divide-gray-200  pb-24 py-8 px-12   sm:w-[920px] mx-auto">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="">
            <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                 {/* Name */}
              <div className="sm:col-span-3">
                <div className="mt-1">
               
                  <input
                  placeholder="Enter your name"
                    type="text"
                    name="user_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block h-8 w-full focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none  sm:py-8 py-6 px-4   bg-[#f8f8f9]  sm:text-base text-[#9ca3af]"
                  />
                </div>
              </div>
                {/* Company Name */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Company (Optional)"
                    type="text"
                    name="company_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full h-8 sm:py-8 py-6 px-4   bg-[#f8f8f9] border-gray-300 shadow-sm focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none sm:text-base text-[#9ca3af]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Email */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Enter Your email"
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="given-name"
                    className="block h-8 sm:py-8 py-6 px-4 text-base w-full  bg-[#f8f8f9]  shadow-sm focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none text-[#9ca3af]"
                  />
                </div>
              </div>
                    {/* Phone Number */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Phone number"
                    type="tel"
                    name="phone_number"
                   
                    id="phone-number"
                    autoComplete="family-name"
                    className="block w-full h-8 sm:py-8 py-6 px-4   bg-[#f8f8f9]  shadow-sm focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none sm:text-base text-[#9ca3af]"
                  />
                </div>
              </div>
            </div>
            {/* Textarea */}
            <div className="overflow-hidden  mt-6 shadow-sm focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none">
              <textarea
                rows={3}
                name="message" 
                id="description"
                className="block w-full sm:py-8 py-6 px-4  bg-[#f8f8f9]  focus:border-b-2 focus:border-[#4a6cf7]  focus:ring-0 focus:outline-none sm:text-base text-[#9ca3af]"
                placeholder="Tell me about your project"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="bg-[#4a6cf7] py-3 px-6 text-white   rounded-xl mt-4 hover:bg-[#4a64f6e6]">Submit</button>
            {/* <input type="submit" value="Send" /> */}
          </div>
        </div>
      </form>
    </>
  );
}
