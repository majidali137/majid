import { Fragment, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { RxDownload } from "react-icons/rx";

import { Link } from "react-scroll";

export default function NavBar() {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <Disclosure
      as="nav"
      className="backdrop-blur-xl bg-white/30 shadow navbar  "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between ">
              <div className="flex ">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center ">
                  <NavLink to= "/">

                 
                  <img
                    className="block h-[55px] w-auto lg:hidden"
                    src="data\image\Image\logo-3.png"
                    alt="Company logo"
                  />
                  <img
                    className="hidden h-[55px] w-auto lg:block"
                    src="data\image\Image\logo-3.png"
                    alt=" Company logo"
                  />
                   </NavLink>
                </div>
                <div className="hidden md:ml-20 md:flex md:space-x-8 justify-end">
                  <NavLink
                    to="/"
                    className=" inline-flex items-center  hover:text-blue-600  px-1 pt-1  text-base"
                  >
                    Home
                  </NavLink>

                  <Link
                    className=" inline-flex items-center hover:cursor-pointer  hover:text-blue-600  px-1 pt-1  text-base"
                    activeClass="text-blue-500"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={80}
                  >
                    About
                  </Link>

                  <Link
                    className=" inline-flex items-center hover:cursor-pointer  hover:text-blue-600  px-1 pt-1  text-base"
                    activeClass="text-blue-500"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={80}
                  >
                    Services
                  </Link>

                  <Link
                    className=" inline-flex items-center hover:cursor-pointer  hover:text-blue-600  px-1 pt-1  text-base"
                    activeClass="text-blue-500"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={80}
                  >
                    Testimonials
                  </Link>
                  <Link
                    className=" inline-flex items-center hover:cursor-pointer  hover:text-blue-600  px-1 pt-1  text-base"
                    activeClass="text-blue-500"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                  >
                    Contact
                  </Link>
                  <NavLink
                    to="blog"
                    className="inline-flex items-center  hover:text-blue-600  px-1 pt-1  text-base   "
                  >
                    Blog
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-full border border-transparent bg-[#4667f0] px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <RxDownload className="pr-[5px] w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#scrvice"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Services
              </Disclosure.Button>
             
              <Disclosure.Button
                as="a"
                href="#contact"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Contact
              </Disclosure.Button>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
