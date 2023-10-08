import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
const Courses = () => {
  return (
    <div className="bg-banner">
      <div div className="container mx-auto w-full">
        {/* Title */}
        <div className="flow-root grid grid-cols-2 gap-4">
          <div className="float-left">
            <div className="pb-2">
              <span className="text-nss-bittersweet text-2xl font-semibold">
                What's New
              </span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-950	">Featured Courses</h2>
            </div>
          </div>
          <div className="float-right content-center col-end-7 col-span-2">
            <button className="border-2 border-indigo-500/50  text-sm py-3 px-12 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white">
              All Courses
            </button>
          </div>
        </div>
        <div className="pt-6 flex">
          <p className="w-3/5 text-slate-700 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            perferendis illum quisquam accusamus exercitationem. Lorem ipsum
            dolor sit.
          </p>
        </div>
        {/* End Title */}

        <div className="py-8">
          <div className="grid grid-cols-3 gap-7">
            {/* Card 1*/}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-800 ">
              <div>
                <img
                  src="/courses/courseBasic.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span>
                    <h3 className="text-green-500 font-bold text-3xl">FREE</h3>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-1.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    David Powell
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  Complete HTML, CSS and Javascript Course
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    0 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-24 -mr-4">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 1 */}

            {/* Card 2 */}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-700">
              <div>
                <img
                  src="/courses/courseFullstack.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span>
                    <h3 className="text-green-500 font-bold text-3xl">FREE</h3>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-1.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    David Powell
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  Fullstack WordPress Developer
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    0 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-36">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    78 hours 30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400 " />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <span className="px-1">
                      <p className="text-sm text-gray-500">4.0</p>
                    </span>
                    <span>
                      <p className="text-sm text-gray-500">(1)</p>
                    </span>
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 2 */}

            {/* Card 3*/}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-700">
              <div>
                <img
                  src="/courses/courseAndroidKotlin.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span className="flex">
                    <p className="text-red-500 font-bold text-2xl">$15</p>
                    <span className="flex mt-2 ml-1">
                      <p className="line-through text-gray-500 font-semibold">
                        $18
                      </p>
                    </span>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-2.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    Michael Morgan
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  Advanced Android 12 & Kotlin Development Course
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    9 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-36">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    78 hours 30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 3*/}

            {/* Card 4*/}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-800 ">
              <div>
                <img
                  src="/courses/courseIOS.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span>
                    <h3 className="text-green-500 font-bold text-3xl">FREE</h3>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-2.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    Michael Morgan
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  iOS & Swift Complete iOS Application Development Course
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    4 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-36">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    60 hours 30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400 " />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <span className="px-1">
                      <p className="text-sm text-gray-500">4.0</p>
                    </span>
                    <span>
                      <p className="text-sm text-gray-500">(1)</p>
                    </span>
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 4 */}

            {/* Card 5 */}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-700">
              <div>
                <img
                  src="/courses/courseRestAPI.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span className="flex">
                    <p className="text-red-500 font-bold text-2xl">$12</p>
                    <span className="flex mt-2 ml-1">
                      <p className="line-through text-gray-500 font-semibold">
                        $14
                      </p>
                    </span>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-2.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    Michael Morgan
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  REST APIs with Flask and Python Developer Course
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    4 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-36">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    50 hours 30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-400" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <span className="px-1">
                      <p className="text-sm text-gray-500">4.0</p>
                    </span>
                    <span>
                      <p className="text-sm text-gray-500">(1)</p>
                    </span>
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 5 */}

            {/* Card 6*/}
            <div className="group block card rounded-md p-4 relative bg-white  hover:bg-slate-700">
              <div>
                <img
                  src="/courses/coursePython.jpg"
                  alt="Basic Learning"
                  className="rounded-lg w-fit"
                />
                <div className="absolute bottom-80 right-8 py-1.5 px-3 -mb-4 rounded-lg bg-white w-fit h-fit ">
                  <span>
                    <h3 className="text-green-500 font-bold text-3xl">FREE</h3>
                  </span>
                </div>
              </div>
              <div className="relative py-3 grid grid-cols-3">
                <div className="pr-3 pt-1">
                  <img
                    className="h-10 w-10 items-center rounded-full border-2 border-stone-300 group-hover:border-white"
                    src="/instructors/prof-2.jpg"
                    alt="Instructor"
                  />
                </div>
                <div className="-ml-20 px-1">
                  <h4 className="text-slate-800 text-lg font-semibold group-hover:text-white">
                    Michael Morgan
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Instructor
                  </p>
                </div>
                <div className="absolute top-5 right-0">
                  <p>
                    <FaRegHeart className="h-6 w-6 fill-red-500 group-hover:fill-white hover:stroke-white" />
                  </p>
                </div>
              </div>
              <div className="w-96 py-2">
                <a
                  className="text-xl font-semibold text-slate-800 group-hover:text-white"
                  href="/"
                >
                  Complete Python & PostgreSQL Developer Course
                </a>
              </div>
              <div className="relative py-4 grid grid-cols-2">
                <div className="static">
                  <MdOutlineMenuBook className="w-5 h-5 rotate-180 fill-red-500 group-hover:fill-white" />
                </div>
                <div className="absolute inset-y-3 left-8">
                  <p className="text-gray-400 text-md group-hover:text-white">
                    4 Lessons
                  </p>
                </div>
                <div className="absolute inset-y-3 right-36">
                  <RiTimerFill className="w-5 h-5 fill-purple-300 " />
                </div>
                <div className="absolute inset-y-3 right-0">
                  <p className="text-gray-400 text-sm group-hover:text-white">
                    40 hours 30 minutes
                  </p>
                </div>
              </div>
              <hr className="group-hover:bg-white" />
              <div className="py-5 relative grid grid-colls-2">
                <div className="container mx-auto pt-2">
                  <span className="flex items-center">
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                    <AiFillStar className="w-5 h-5 fill-gray-300 group-hover:fill-gray-100" />
                  </span>
                </div>
                <div className="absolute inset-y-3 right-0">
                  <button className="border-2 border-indigo-500/50  text-sm py-3 px-6 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white group-hover:text-white group-hover:border-violet-500 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 6*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
