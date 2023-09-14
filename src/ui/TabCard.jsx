import React from "react";
import { Link } from "react-router-dom";

export default function TabCard({ heading, description, image, path, className }) {
  return (
    <div>
      <div className={`py-5 mb-5 ${className}` }>
        <img src={image} alt="work" className="ease-in-out duration-300 border shadow-[#9ea4b8] shadow-md rounded-lg " />
        <div>
          <Link to={path}>
            <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
              {heading}
            </h1>
          </Link>
          <p className="text-[#959CB1] font-medium text-left ">{description}</p>
        </div>
      </div>
    </div>
  );
}
