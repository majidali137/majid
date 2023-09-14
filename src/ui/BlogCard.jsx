import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, path, title, description }) {
  return (
    <div>
      <Link to={path}>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={image} alt="post1" />
          </div>

          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-gray-900 hover:text-[#4a6cf7]">
                {title}
              </h1>
              <p className="cardDes mt-3 text-base text-gray-500 text-ellipsis overflow-hidden h-12">
                {description}
              </p>
              <p className=" py-2 px-3 text-gray-500 font-medium  mt-4 hover:text-[#4a64f6e6]">
                Read more &#8594;
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
