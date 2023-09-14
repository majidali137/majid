import React from "react";
import Heading from "../../ui/Heading";

export default function ResumeSection() {
  return (
    <>
      {/* <!-- component --> */}
      <section className="container  mx-auto w-full h-full mt-24 border-b sm:py-20 py-10">
        <Heading
          subHeading="Education & Experience"
          mainHeading="My Resume"
          description="Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy."
        />

        <div className="relative wrap overflow-hidden sm:p-10 pl-3 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-[50%]"></div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                Full Stack Web Developer
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Power Funnels | Canada
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-5 py-2 text-right max-w-[132px] sm:float-right ">
                2022-present
              </p>

              <p className="text-sm sm:mt-16 font-medium text-justify mt-4 leading-snug tracking-wide sm:text-justify text-[#959CB1]">
                Power Funnels is a full-service agency that’s been purposely
                built to help businesses small and large thrive in an
                increasingly complicated marketing landscape
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center items-center w-full right-timeline">
            <div className="order-1 sm:w-5/12"></div>
            <div className=" sm:flex sm:items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1   sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
              On-site and Off-site SEO Expert
              </h3>
              <h2 className="text-[#959CB1] font-bold mb-2">
                Power funnels | Canada
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-5 py-2 text-right max-w-[120px]   ">
                2021-2022
              </p>
              <p className="text-sm leading-snug tracking-wide text-justify text-[#959CB1] font-medium text-opacity-100 mt-2">
                 Power funnels is an Information
                Technology based company. We are a group of highly competent,
                productive, and enthusiastic individuals. We are motivated and
                dedicated to working with clients.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                Bachelor of Computer Sciences
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Government College University Faisalabad
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-5 py-2 text-right max-w-[130px] sm:float-right ">
                2021-present
              </p>

              <p className="text-sm sm:mt-16 font-medium text-justify mt-4 leading-snug tracking-wide sm:text-justify text-[#959CB1]">
                A Bachelor of Computer Science The degree has a major focus on
                computers and technology, to study management and informat on
                science, and there are reduced requirements for mathematics.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center items-center w-full right-timeline">
            <div className="order-1 sm:w-5/12"></div>
            <div className=" sm:flex sm:items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1   sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Intermediate of Computer Sciences
              </h3>
              <h2 className="text-[#959CB1] font-bold mb-2">
                Govt. College SKP
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-5 py-2 text-right max-w-[120px]   ">
                2018-2020
              </p>
              <p className="text-sm leading-snug tracking-wide text-justify text-[#959CB1] font-medium text-opacity-100 mt-2">
                Intermediate of Computer Science (ICS) program provides a
                general education in many aspects of Computer Science and
                Software Development. Now the computer is so much vast field
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                Matric in Computer Science
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Quaid Public School SKP
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-5 py-2 text-right max-w-[112px] sm:float-right ">
                2016-2018
              </p>

              <p className="text-sm sm:mt-16 font-medium mt-4 text-justify leading-snug tracking-wide sm:text-justify text-[#959CB1]">
                Matric in computer science is the first and basic step to start
                studying in the field of computer. In this field I entered in
                2016 and I struggled and worked hard and passed with first
                division.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
