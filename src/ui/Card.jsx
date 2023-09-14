import React from "react";
export default function Card({ title, description, icon }) {
  return (
    <div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none ">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="card flex flex-1 flex-col justify-between bg-white text-center  hover:bg-[#4A6CF7] hover:text-white py-8">
            <div className="text-center sm:py-9">
              <div className="icon-bg mx-auto  bg-[#4A6CF7] h-20	w-20 rounded-full   ">
                <div className="icon text-white text-4xl ">{icon}</div>
              </div>

              <div className="mt-2 block px-8 text-center">
                <h2 className="text-2xl font-bold "> {title}</h2>
                <p className="mt-3 text-sm  cardText text-left">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
