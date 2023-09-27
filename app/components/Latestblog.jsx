import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
function LatestBlog() {
  return (
    <div className="h-[100vh] w-full pt-10 bg-snow">
      <h1 className="text-[#002058] mb-4 text-4xl font-bold text-center">
        Lates Blogs
      </h1>
      <p className="text-[#685F78] w-[700px] m-auto text-center mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
        accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
        imperdiet.
      </p>
      <div className="flex justify-center ">
        <div className="w-[95vw] flex items-stretch gap-x-8">
          <div className="w-full lg:w-1/2 xl:w-1/4 min-h-[100%]">
            <div className="h-[95%] bg-white shadow-lg rounded-xl overflow-hidden mb-10">
              <Image
                src="/aa.jpg"
                alt="aa"
                width={360}
                height={200}
                className="w-full"
              />
              <div className="py-8 px-2">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-ungu hover:text-red-400 text-center "
                  >
                    Expan Your Career Opportunities with Python
                  </a>
                </h3>
              </div>
              <p className="text-sm text-center text-[#002058] -mt-8 mb-6">
                Courses
              </p>
              <div className="text-center">
                <p className="text-sm text-center text-[#002058] inline-flex mb-6 -mt-2">
                  <FaCalendarAlt className="mr-2 m-auto text-red-400" />
                  January 12, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/4 min-h-[100%]">
            <div className="h-[95%] bg-white shadow-lg rounded-xl overflow-hidden mb-10">
              <Image
                src="/bb.jpg"
                alt="aa"
                width={360}
                height={200}
                className="w-full"
              />
              <div className="py-8 px-2">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-ungu hover:text-red-400 text-center "
                  >
                    Learn Web Applications Development From Experts
                  </a>
                </h3>
              </div>
              <p className="text-sm text-center text-[#002058] -mt-8 mb-6">
                Education
              </p>
              <div className="text-center">
                <p className="text-sm text-center text-[#002058] inline-flex mb-6 -mt-2">
                  <FaCalendarAlt className="mr-2 m-auto text-red-400" />
                  January 12, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/4 min-h-[100%]">
            <div className="h-[95%] bg-white shadow-lg rounded-xl overflow-hidden mb-10">
              <Image
                src="/cc.jpg"
                alt="aa"
                width={360}
                height={200}
                className="w-full"
              />
              <div className="py-8 px-2">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-ungu hover:text-red-400 text-center"
                  >
                    Complete PHP Progamming Career
                  </a>
                </h3>
              </div>
              <p className="text-sm text-center text-[#002058] -mt-8 mb-6">
                Business
              </p>
              <div className="text-center">
                <p className="text-sm text-center text-[#002058] inline-flex mb-6 -mt-2">
                  <FaCalendarAlt className="mr-2 m-auto text-red-400" />
                  January 12, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/4 min-h-[100%]">
            <div className="h-[95%] bg-white shadow-lg rounded-xl overflow-hidden mb-10">
              <Image
                src="/dd.jpg"
                alt="aa"
                width={360}
                height={200}
                className="w-full"
              />
              <div className="py-8 px-2">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-ungu hover:text-red-400 text-center"
                  >
                    Progaming Content Guideline for Beginners
                  </a>
                </h3>
              </div>
              <p className="text-sm text-center text-[#002058] -mt-8 mb-6">
                Grapics Design
              </p>
              <div className="text-center">
                <p className="text-sm text-center text-[#002058] inline-flex mb-6 -mt-2">
                  <FaCalendarAlt className="mr-2 m-auto text-red-400" />
                  January 12, 2023
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-10 flex justify-center">
        <button className="w-[50px] h-[15px] bg-[#FF6575] rounded-lg"></button>
        <button className="w-[15px] h-[15px] bg-[#FFDEDA] rounded-full ml-4 hover:w-[50px] hover:h-[15px] hover:bg-[#FF6575]"></button>
      </div>
    </div>
  );
}

export default LatestBlog;
