"use client";
import React from "react";
import Image from "next/image";
import { FaPencilRuler } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { TbCertificate2 } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";

const Jumbotron = () => {
  return (
    <>
      <div className="bg-banner">
        <div className="px-2 flex justify-center w-full h-full bg-gradient-to-r from-nss-misty-rose from-10% via-nss-misty-rose via-10% to-nss-alice-blue to-90% mx-auto">
          <div className="w-[90%]">
            <Navbar />
          </div>
        </div>
        <div className="flex container mx-auto">
          <div className="w-full item-center justify-center px-2 py-20">
            <h1 className=" text-davysgray text-xl">
              The Leader in Online Learning
            </h1>
            <h2 className="text-base font-semibold text-ungu">
              <span className="block font-bold text-5xl mt-7">
                {" "}
                Engaging &{" "}
              </span>
              <span className="block font-bold text-5xl mt-2">
                Accessible Online{" "}
              </span>
              <span className="block font-bold text-5xl mt-2">
                {" "}
                Courses For All
              </span>
            </h2>

            <div className="py-16">
              <form action="">
                <div className="relative">
                  <div className="absolute left-0 py-4 pl-4 flex items-center pr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-bittersweet"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="absolute right-0 pt-2 flex items-center pr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-11 h-11 text-bittersweet"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search School, Online eductional centers, etc"
                  autoComplete="off"
                  className="px-28 py-4 font-semibold placeholder-gray-400 text-black rounded-3xl border-none w-full"
                />
              </form>
            </div>

            <p className=" text-davysgray text-xl">
              Trusted by over 15K Users
              <br /> worldwide since 2022
            </p>

            <div className="trust-rating d-flex align-items-center">
              <div className="rate-head">
                <h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="block font-bold text-5xl mt-2 text-ungu">
                        290+ 4.5
                      </span>
                    </div>
                    <div className="px-1 py-5">
                      <FaStar className=" w-5 h-5 fill-orange-400" />
                    </div>
                    <div className="px-1 py-5">
                      <FaStar className=" w-5 h-5 fill-orange-400" />
                    </div>
                    <div className="px-1 py-5">
                      <FaStar className=" w-5 h-5 fill-orange-400" />
                    </div>
                    <div className="px-1 py-5">
                      <FaStar className=" w-5 h-5 fill-orange-400" />
                    </div>
                    <div className="px-1 py-5">
                      <FaStar className=" w-5 h-5 fill-orange-400" />
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full item-center justify-content py-24">
            <Image
              src="/a.png"
              width="630"
              height="653"
              style={{
                width: "80%",
                height: "auto",
              }}
              alt="A"
            ></Image>
          </div>
        </div>
        {/* garis potong*/}

        {/* Card Courses */}
        <div className="relative container mx-auto">
          <div className="absolute -bottom-16 grid grid-cols-4 gap-4 w-full justify-between">
            {/* Online Courses */}
            <div
              className="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                      max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div className="p-8">
                <div className="px-3 bg-mistyrose rounded-full w-fit h-fit">
                  <FaPencilRuler className="w-12 h-16 fill-bittersweet rotate-90" />
                </div>
              </div>
              <div className="py-8 -ml-8">
                <h4 className="text-3xl font-bold text-ungu"> 0K </h4>
                <p className="text-lg text-gray-500">Online Courses</p>
              </div>
            </div>

            {/* Expert Tutor */}
            <div
              className="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                      max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div className="p-8">
                <div className="px-3 bg-aliceblue rounded-full w-fit h-fit">
                  <RiUserStarLine className="w-12 h-16 fill-blue-900" />
                </div>
              </div>
              <div className="py-8 -ml-8">
                <h4 className="text-3xl font-bold text-blue-900"> 186+ </h4>
                <p className="text-lg text-gray-500">Expert Tutors</p>
              </div>
            </div>

            {/* Ceritified Courses */}
            <div
              className="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                    max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div className="p-8">
                <div className="px-3 bg-purple-100 rounded-full w-fit h-fit">
                  <TbCertificate2 className="stroke-purple-800 w-12 h-16" />
                </div>
              </div>
              <div className="py-8 -ml-8">
                <h4 className="text-3xl font-bold text-blue-900"> 5K+ </h4>
                <p className="text-lg text-gray-500">Ceritified Courses</p>
              </div>
            </div>

            {/* Online Students */}
            <div
              className="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                    max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div className="p-8">
                <div className="px-3 bg-azureweb rounded-full w-fit h-fit">
                  <FaUserGraduate className="w-12 h-16 fill-cyan-500" />
                </div>
              </div>
              <div className="py-8 -ml-8">
                <h4 className="text-3xl font-bold text-blue-900"> 55K+ </h4>
                <p className="text-lg text-gray-500">Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
