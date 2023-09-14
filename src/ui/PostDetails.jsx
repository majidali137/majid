import React from "react";

export default function PostDetails({ image, blogTitle, blogText }) {
  return (
    <>
      <section className="sm:pb-12 pb-8">
        <div className="max-w-[600px] sm:max-w-screen-sm md:max-w-3xl lg:max-w-screen-lg xl:max-w-screen-xl  w-full mx-auto py-4">
          <div className="flex flex-wrap -mx-5">
            <div className="sm:px-5 w-full">
              <div>
                <div className="rounded-sm ">
                  <img
                    src={image}
                    alt="recent-work-details"
                    className="object-center object-cover w-full max-h-[28rem]"
                  />
                </div>
                <h1 className="text-2xl mb-7 font-bold sm:text-4xl md:text-3xl px-6 sm:px-0 mt-6 ">
                  {blogTitle}
                </h1>
                <p className="mb-8 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0  text-justify">
                  {blogText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
