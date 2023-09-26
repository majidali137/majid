import React from "react";

export default function PersonalImg() {
  return (
    <>
      <div>
        <span className="top-[3rem] left-0 absolute z-0 opacity-0 sm:opacity-100">
          <img src="data\image\Image\hero-image-bg.svg" alt="heroBg" />
        </span>
        <span className="right-0 bottom-0 absolute">
          <img src="data\image\Image\blue-hero-circle.svg" alt="circle" />
        </span>
      </div>
    </>
  );
}
