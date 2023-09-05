import Image from 'next/image';
import React from 'react'
import { FaBook } from "react-icons/fa";
function FeaturedInstructor() {
  return (
    <div className="container mx-auto w-full">
      <h1 className="text-[#002058] mb-4 text-4xl font-bold text-center">
        Featured Instructor
      </h1>
      <p className="text-[#685F78] w-[700px] m-auto text-center mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
        accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
        imperdiet.
      </p>
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-[#FFFFFF] border-[#e9ecef] w-full border-[1px] rounded-t-lg pb-4">
          <Image
            className="rounded-t-lg"
            src="/profile2.jpg"
            width={300}
            height={300}
            alt="A"
            style={{
              width: "100%",
              height: "300px",
            }}
          ></Image>
          <h5 className="font-bold text-2xl text-center pb-2 pt-2">
            Alice Lane
          </h5>
          <p className="text-sm text-center text-[#002058] pb-2">Instructor</p>
          <div className="text-center">
            <p className="text-sm text-center text-[#002058] inline-flex">
              <FaBook className="mr-2 m-auto text-red-400" />0 Course
            </p>
          </div>
        </div>
        <div class="bg-[#FFFFFF] border-[#e9ecef] w-full border-[1px] rounded-t-lg pb-4">
          <Image
            className="rounded-t-lg"
            src="/profile3.jpg"
            width={300}
            height={300}
            style={{
              width: "100%",
              height: "300px",
            }}
            alt="A"
          ></Image>
          <h5 className="font-bold text-2xl text-center pb-2 pt-2">
            Alice Lane
          </h5>
          <p className="text-sm text-center text-[#002058] pb-2">Instructor</p>
          <div className="text-center">
            <p className="text-sm text-center text-[#002058] inline-flex">
              <FaBook className="mr-2 m-auto text-red-400" />0 Course
            </p>
          </div>
        </div>
        <div class="bg-[#FFFFFF] border-[#e9ecef] w-full border-[1px] rounded-t-lg pb-4">
          <Image
            className="rounded-t-lg"
            src="/profile4.jpg"
            width={300}
            height={300}
            style={{
              width: "100%",
              height: "300px",
            }}
            alt="A"
          ></Image>
          <h5 className="font-bold text-2xl text-center pb-2 pt-2">
            Alice Lane
          </h5>
          <p className="text-sm text-center text-[#002058] pb-2">Instructor</p>
          <div className="text-center">
            <p className="text-sm text-center text-[#002058] inline-flex">
              <FaBook className="mr-2 m-auto text-red-400" />0 Course
            </p>
          </div>
        </div>
        <div class="bg-[#FFFFFF] border-[#e9ecef] w-full border-[1px] rounded-t-lg pb-4">
          <Image
            className="rounded-t-lg"
            src="/profile5.jpg"
            width={300}
            height={300}
            style={{
              width: "100%",
              height: "300px",
            }}
            alt="A"
          ></Image>
          <h5 className="font-bold text-2xl text-center pb-2 pt-2">
            Alice Lane
          </h5>
          <p className="text-sm text-center text-[#002058] pb-2">Instructor</p>
          <div className="text-center">
            <p className="text-sm text-center text-[#002058] inline-flex">
              <FaBook className="mr-2 m-auto text-red-400" />0 Course
            </p>
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

export default FeaturedInstructor
