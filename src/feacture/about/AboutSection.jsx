import React from "react";
import SocialIcon from "../../ui/SocialIcon";

export default function AboutSection() {
  return (
    <div id="about" className=" border-b sm:pb-32 pb-10 ">
      {/* Testimonial/stats section */}
      <div className="relative  ">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl xl:grid-cols-2 xl:items-start xl:gap-24 xl:px-8 ">
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <span className="text-2xl font-bold text-[#4A6CF7]">
                ABOUT ME
              </span>
              <br />
              <h2 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  max-w-[400px]">
                Better design, better experience
              </h2>
              <div className="mt-6 space-y-6 text-[#959CB1]">
                <p className="">
                  I am a specialized in{" "}
                  <span className="font-medium text-[#6b7280]">
                    React, javaScript, HTML CSS, Boostrap, Tailwind CSS &
                    WordPress
                  </span>
                  . High-quality web programming services for your needs. I do
                  my best to transform your ideas into a perfect product.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl mb- font-bold tracking-tight text-gray-900 sm:text-3xl">
                Connect With Me
              </h2>
              <div className="mt-6 space-y-6  text-[#959CB1]">
                <p className="">
                  If you want to discuss any type of projects in{" "}
                  <span className="font-medium text-[#6b7280]">
                    React, JavaScript, HTML CSS, Boostrap and Tailwind CSS &
                    WordPress{" "}
                  </span>
                  you can easily contact me through the following links.I can
                  create a website that won’t just suit your requirements but
                  also take care of your budget.I have a computer science
                  background, knowledge of architecture
                  planning, and scaling. Feel free to contact me
                </p>
                <div>
                  <SocialIcon className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
