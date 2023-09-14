import React from "react";

export default function ClientCTA() {
  return (
    <>
      <div className="relative mt-0 sm:mt-0 ">
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 sm:mt-[-150px] mt-[-100px]">
          <div className="relative overflow-hidden rounded-2xl bg-[#4a6cf7] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-xl mx-auto">
                  Want to work together and create amazing products with me ?
                </h2>
               
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base bg-[#6582f8] text-white placeholder-white shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a6cf7]"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#4a6cf7] shadow hover:bg-[#6582f8] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a6cf7] sm:px-10"
                  >
                    Get a Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
