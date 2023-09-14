import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function RecentWorkDetails() {
  return (
    <>
      <section className=" pt-24 overflow-hidden mb-20 relative">
        <div className="max-w-[540px] sm:max-w-screen-sm md:max-w-3xl lg:max-w-screen-lg xl:max-w-screen-xl  w-full mx-auto py-4">
          <div className="items-center flex flex-wrap sm:flex-nowrap -mx-4 ">
            <div className="lg:w-[58.333333%] md:w-[66.666%] px-4 w-full">
              <div className="md:mb-0 max-w-[570px] mb-12 px-4">
                <h1 className="sm:text-3xl text-2xl font-bold mb-5 ">
                  Portfolio Details Page
                </h1>
                <p className="font-medium text-base text-[#95a5c8]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  varius eros eget sapien consectetur ultrices. Ut quis dapibus
                  libero.
                </p>
              </div>
            </div>
            <div className="lg:w-[58.333333%] md:w-[66.666%] px-4 w-full">
              <div className="text-end">
                <ul className="md:justify-end items-center flex m-0 p-0 list-none">
                  <li className="items-center flex px-2">
                    <Link to="/" className="text-[#95a5c8]">
                      Home{" "}
                    </Link>
                    <span> /</span>
                  </li>
                  <li className="text-[#879efa] font-medium text-base">
                    Portfolio Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:pb-24 pb-8">
        <div className="max-w-[540px] sm:max-w-screen-sm md:max-w-3xl lg:max-w-screen-lg xl:max-w-screen-xl  w-full mx-auto py-4">
          <div className="flex flex-wrap -mx-5">
            <div className="sm:px-5 w-full lg:w-[66.666%]">
              <div>
                <div className="rounded-sm mb-8">
                  <img
                    src="src\data\image\image\portfolio-details.jpg"
                    alt="recent-work-details"
                    className="object-center object-cover w-full"
                  />
                </div>
                <h3 className="text-2xl mb-7 font-bold sm:text-4xl md:text-3xl px-6 sm:px-0">
                  Professional graphics design
                </h3>
                <p className=" mb-8 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <p className=" mb-9 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper proin libero nunc consequat
                  interdum varius. Quam pellentesque nec nam.
                </p>
                <h4 className="text-2xl mb-8 font-bold sm:text-2xl md:text-2xl px-6 sm:px-0">
                  <span className="text-[#4a6cf7]">01. </span>Marketing
                  solutions
                </h4>
                <ul className="list-disc list-inside mb-7  ">
                  <li className=" mb-3 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                    {" "}
                    Consectetur adipiscing elit in voluptate velit.
                  </li>
                  <li className=" mb-3 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                    Mattis vulputate cupidatat.
                  </li>
                  <li className=" mb-3 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                    Vulputate enim nulla aliquet porttitor
                  </li>
                  <li className=" mb-3 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                    Ligula ullamcorper malesuada proin
                  </li>
                </ul>
                <p className=" mb-9 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0"></p>

                <h4 className="text-2xl mb-8 font-bold sm:text-2xl md:text-2xl px-6 sm:px-0">
                  <span className="text-[#4a6cf7]">02. </span> Branding
                  solutions
                </h4>
                <p className="sm:mb-9 mb-12 text-base text-[#95a5c8] sm:text-2xl lg:text-lg xl:text-xl  px-8 sm:px-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit door telium sieat amet.
                </p>
              </div>
            </div>

            <div className="lg:w-[33.333%] px-5 w-full">
              <div className="lg:px-5 md:px-6 sm:p-9 py-9 px-6 bg-[#f8f9ff] border-2 border-[#d7dfff] rounded-sm mb-10 ">
                <h3 className=" text-[#4a6cf7] font-bold text-2xl mb-7">
                  Project Info
                </h3>
                <ul>
                  <li className=" lg:flex-wrap xl:flex-nowrap flex mb-3">
                    <span className="flex font-medium text-base justify-between max-w-[90px] w-full ">
                      Category <span className="text-[#969db2]">:</span>
                    </span>
                    <span className="xl:pl-5 lg:pl-0 text-[#969db2] font-medium  text-base pl-5 w-full">
                      Branding, Design
                    </span>
                  </li>

                  <li className=" lg:flex-wrap xl:flex-nowrap flex mb-3">
                    <span className="flex font-medium text-base justify-between max-w-[90px] w-full ">
                      Date <span className="text-[#969db2]">:</span>
                    </span>
                    <span className="xl:pl-5 lg:pl-0 text-[#969db2] font-medium  text-base pl-5 w-full">
                      Sep,04,2023
                    </span>
                  </li>

                  <li className=" lg:flex-wrap xl:flex-nowrap flex mb-3">
                    <span className="flex font-medium text-base justify-between max-w-[90px] w-full ">
                      Tags <span className="text-[#969db2]">:</span>
                    </span>
                    <span className="xl:pl-5 lg:pl-0 text-[#969db2] font-medium  text-base pl-5 w-full">
                      Business, Consulting
                    </span>
                  </li>

                  <li className=" lg:flex-wrap xl:flex-nowrap flex mb-3">
                    <span className="flex font-medium text-base justify-between max-w-[90px] w-full ">
                      Website <span className="text-[#969db2]">:</span>
                    </span>
                    <span className="xl:pl-5 lg:pl-0 text-[#969db2] font-medium  text-base pl-5 w-full">
                      www.yoursite.com
                    </span>
                  </li>

                  <li className=" lg:flex-wrap xl:flex-nowrap flex mb-3">
                    <span className="flex font-medium text-base justify-between max-w-[90px] w-full ">
                      Location <span className="text-[#969db2]">:</span>
                    </span>
                    <span className="xl:pl-5 lg:pl-0 text-[#969db2] font-medium  text-base pl-5 w-full">
                      New York, USA
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lg:px-5 md:px-6 sm:p-9 py-9 px-6 bg-[#f8f9ff] border-2 border-[#d7dfff] rounded-sm  ">
                <h3 className="text-[#4a6cf7] font-bold text-2xl mb-7">
                  Download
                </h3>
                <ul>
                  <li className="flex mb-4">
                    <button className="text-white font-medium text-base px-5 py-3 bg-[#4a6cf7] items-center w-full flex cursor-pointer">
                      <span className="pr-2 flex items-center">
                        <AiOutlineFilePdf />
                        <span className="pl-2"> Main-project-file.zip</span>
                      </span>
                    </button>
                  </li>
                  <li className="flex mb-4">
                    <button className="text-white font-medium text-base px-5 py-3 bg-[#4a6cf7] items-center w-full flex cursor-pointer">
                      <span className="pr-2 flex items-center">
                        <AiOutlineFilePdf />
                        <span className="pl-2"> Design-file.zip</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
