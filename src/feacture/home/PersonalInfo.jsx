import React from "react";


export default function PersonalInfo() {
  return (
    <>
      <div className=" xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-full mx-auto px-4 ">
        <div className="flex flex-wrap -mx-4">
          {/* personal Details */}
          <div className="lg:w-3/6 px-4 self-center w-full">
            <div>
              <h1 className="font-semibold text-base mb-3 text-[#4a6cf7]">
                Hey There 👋 I am
                <span className="md:leading-[50px] text-black md:text-5xl sm:leading-[1.25rem] sm:text-3xl font-bold text-3xl block mt-1 ">
                  Majid Ali
                </span>
              </h1>
              <h2 className="md:text-xl text-[#959cb1] font-medium text-xl mb-5">
                Professional
                <span className="text-black"> Web Developer</span>{" "}
              </h2>
              <p className="leading[1.625rem] font-medium text-base  mb-11 text-[#959cb1]">
                I am a specialized freelance Web Designer & Developer, Graphics
                Designer, HTML CSS, Boostrap, Tailwind CSS javaScript, React, WordPress & on-site and off-site SEO Expert. I specialize in
                developing and marketing superior quality professional React
                and custom websites for my clients. I can create a website that
                won’t just suit your requirements but also take care of your
                budget.
              </p>
              <div className="flex items-center">
                <button className="ease-in-out duration-300  text-white font-semibold text-base px-8 py-3 bg-[#4a6cf7] mr-4 rounded-full ">
                  <a href="#contact">Contact me</a>
                </button>
                <button className=" ease-in-out duration-300 text-white font-semibold text-base px-8 py-3 bg-black mr-4 rounded-full ">
                  <a href="#about"> Learn more</a>
                </button>
              </div>
            </div>
          </div>

          {/* personal image */}
          <div className="lg:w-3/6 px-4 self-center w-full">
            <div className="xl:right-40 xl:bottom-0 xl:absolute xl:mt-0 mt-12 z-10 relative ">
              <img
                src="data\image\Image\Majid.png"
                alt="heroImage"
                className="max-w-full mx-auto " 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
