"use client";
import React from "react";
import Image from "next/image";
import { FaPencilRuler } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { TbCertificate2 } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import {FaStar} from "react-icons/fa";

const Jumbotron = () => {
  return (
    <>
      <div
        className="bg-snow relative"
        
      >
        <div className="container">
          <div className="flex">
            <div className="w-full self-center px-28 py-44">
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
                  <div className="absolute left-32 py-4 flex items-center pr-3 pointer-events-none ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-bittersweet"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div className="absolute px-96 py-4 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-11 h-11 text-bittersweet"
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
                    className="px-28 py-4 font-semibold placeholder-gray-400 text-black rounded-3xl border-none"
                  />
                </form>
              </div>

              <p className=" text-davysgray text-xl">
                Trusted by over 15K Users
                <br /> worldwide since 2022
              </p>

              <div class="trust-rating d-flex align-items-center">
                <div class="rate-head">
                  <h2>
                    <div class="flex flex-row">
                      <div>
                      <span className="block font-bold text-5xl mt-2 text-ungu">
                        0+ 4.5 
                      </span>
                      </div>
                      <div class="px-1 py-5">
                      <FaStar class=" w-5 h-5 fill-orange-400"/>
                      </div>
                      <div class="px-1 py-5">
                      <FaStar class=" w-5 h-5 fill-orange-400"/>
                      </div>
                      <div class="px-1 py-5">
                      <FaStar class=" w-5 h-5 fill-orange-400"/>
                      </div>
                      <div class="px-1 py-5">
                      <FaStar class=" w-5 h-5 fill-orange-400"/>
                      </div>
                      <div class="px-1 py-5">
                      <FaStar class=" w-5 h-5 fill-orange-400"/>
                      </div>
                    </div>
                    
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full self-center flex justify-center ">
              <Image
                className="mt-6"
                src="/a.png"
                width="630"
                height="653"
                style={{
                  width: "380px",
                  height: "380px",
                }}
                alt="A"
              ></Image>
            </div>
          </div>
        </div>

        {/* garis potong*/}
        <hr />


        {/* Card Courses */}
        <div class="static pb-28 ">
          <div class="px-8 absolute bottom-12 left-0 grid grid-cols-4 gap-4 w-full">
            {/* Online Courses */}
            <div
              class="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                      max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div class="p-8">
                <div class="px-3 bg-mistyrose rounded-full w-fit h-fit">
                  <FaPencilRuler class="w-12 h-16 fill-bittersweet rotate-90" />
                </div>
              </div>
              <div class="py-8 -ml-8">
                <h4 class="text-3xl font-bold text-ungu"> 0K </h4>
                <p class="text-lg text-gray-500">Online Courses</p>
              </div>
            </div>

            {/* Expert Tutor */}
            <div
              class="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                      max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div class="p-8">
                <div class="px-3 bg-aliceblue rounded-full w-fit h-fit">
                  <RiUserStarLine class="w-12 h-16 fill-blue-900" />
                </div>
              </div>
              <div class="py-8 -ml-8">
                <h4 class="text-3xl font-bold text-blue-900"> 186+ </h4>
                <p class="text-lg text-gray-500">Expert Tutors</p>
              </div>
            </div>

            {/* Ceritified Courses */}
            <div
              class="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                    max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div class="p-8">
                <div class="px-3 bg-purple-100 rounded-full w-fit h-fit">
                  <TbCertificate2 class="stroke-purple-800 w-12 h-16" />
                </div>
              </div>
              <div class="py-8 -ml-8">
                <h4 class="text-3xl font-bold text-blue-900"> 5K+ </h4>
                <p class="text-lg text-gray-500">Ceritified Courses</p>
              </div>
            </div>

            {/* Online Students */}
            <div
              class="relative w-full grid grid-cols-2 border-2 rounded-3xl max-h-max max-w-5xl
                    max-h-32 max-w-5xl border-gray-200 bg-white"
            >
              <div class="p-8">
                <div class="px-3 bg-azureweb rounded-full w-fit h-fit">
                  <FaUserGraduate class="w-12 h-16 fill-cyan-500" />
                </div>
              </div>
              <div class="py-8 -ml-8">
                <h4 class="text-3xl font-bold text-blue-900"> 55K+ </h4>
                <p class="text-lg text-gray-500">Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;