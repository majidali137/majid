import React from "react";

export default function TestimonalCard({CoLogo,CoDescription, CoOwnerName,CoOwnerImg, CoName, CologClassName}) {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-between shadow-xl shadow-[#f4f4f6] bg-white p-6 rounded-xl mb-12 border">
        <div className="flex-1 py-4">
          <img src={CoLogo} alt="Lineicons" className={CologClassName} />
          <a href="/" className="mt-2 block">
            <p className="mt-3 text-base text-gray-500">
             {CoDescription}
            </p>
          </a>
        </div>

        <div className="flex justify-between items-center">
          <div className="mt-6 flex items-center ">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-10 w-10 rounded-full"
                  src={CoOwnerImg}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="/" className="hover:underline">
                  {CoOwnerName}
                </a>
              </p>
              <div className=" text-sm text-gray-500 font-semibold">
                <p className="">{CoName}</p>
              </div>
            </div>
          </div>

          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  );
}
