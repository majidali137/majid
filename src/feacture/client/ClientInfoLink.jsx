import React from "react";

export default function ClientInfoLink() {
  return (
    <>
      <section
        aria-labelledby="customer-heading"
        className="mx-auto max-w-2xl pt-8 pb-16 px-6 lg:max-w-7xl lg:pt-18 lg:pb-36 lg:px-8"
      >
        <div className=" flex  justify-between space-x-6 items-center">
          <img src="src\data\image\image\pf-logo.svg" alt="lineicon" className="max-w-[80px] sm:max-w-[250px]" />
          <img src="src\data\image\Image\coppellconservatory-logo-light.png" alt="plainadmin" className="max-w-[60px] sm:max-w-[150px]" />
          <img src="src\data\image\Image\ASAMBY_Logo_yellow.png" alt="uidecks" className="max-w-[60px] sm:max-w-[180px]" />
          <img src="src\data\image\Image\SOP-Heroes-logo.svg" alt="tailgrids" className="max-w-[60px] sm:max-w-[200px]" />
        </div>
      </section>
    </>
  );
}
