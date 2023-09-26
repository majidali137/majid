import { useState } from "react";
import TabCard from "../../ui/TabCard";
import Heading from "../../ui/Heading";

export default function RecentWorkSection() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section id="recentWork" className=" bg-[#F8F9FF] py-16 sm:pt-28 pb-4">
      <Heading
        subHeading="Creative Websites"
        mainHeading="Recent Works"
        description="
        The following projects have been developed by me recently. These projects are built with advanced and latest technology. The speed of execution of these projects is very high
        ."
        className="animate-fade-down animate-once animate-ease-out"
      />

      {/* Tabs */}
      <div className="flex flex-wrap place-content-center">
        <div className="wrkTabUiCntr">
          <ul className="flex sm:mb-12  list-none flex-wrap justify-center items-center pt-3  flex-row">
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm uppercase px-5 py-2  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                React Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0   text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2  block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                WordPress Projects
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2 block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                HTML / Css Projects
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 sm:max-w-[70%] sm:self-center  ">
            <div className="px-4 py-5 ">
              
              <div className="tab-content tab-space ">
                <div
                  className={
                    openTab === 2 || openTab === 1 ? "block" : "hidden"
                  }
                  id="link1"
                >
                  <div className="sm:flex space-x-5 mx-5 ">
                    <TabCard
                      heading="Start Project with Power Funnel"
                      description="This project builds with react and uses modern and innovative technology. Performance is excellent."
                      image="public\data\image\projects\react-projects\project-1.png"
                      path="react-project-1"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />

                    <TabCard
                      heading="The WoldWise"
                      description="This project is built with react. the latest and advance technology was used in this project. and also provide the facility to the user for location map. ."
                      image="public\data\image\projects\react-projects\project-2.png"
                      path="react-project-2"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />
                  </div>
                </div>
                <div
                  className={
                    openTab === 3 || openTab === 1 ? "block" : "hidden"
                  }
                  id="link2"
                >
                  <div className="sm:flex space-x-5 mx-5 ">
                    <TabCard
                      heading="Asamby"
                      description="Setting a business up for success is difficult to do alone. I learned that the hard way."
                      image="data\image\projects\Wordpress-projects\project-1.png"
                      path="wordpress-project-1"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />

                    <TabCard
                      heading="Coppel Conservation"
                      description="At Coppell Conservatory, we strive to provide the best possible music education for our students."
                      image="data\image\projects\Wordpress-projects\project-2.png"
                      path="wordpress-project-2"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />
                  </div>
                </div>
                <div
                  className={
                    openTab === 4 ? "block" : "hidden"
                  }
                  id="link2"
                >
                  <div className="sm:flex space-x-5 mx-5">
                    <TabCard
                      heading="Startup landing page"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="data\image\Image\images-portfolio-01.jpg"
                      path="recent-work-details"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />

                    <TabCard
                      heading="Job portal landing page"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="data\image\Image\images-portfolio-03.jpg"
                      path="recent-work-details"
                      className="animate-fade-down animate-once animate-ease-linear"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
