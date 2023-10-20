import Image from "next/image";
import React from "react";

const Top_category = () => {
  return (
    <div className="container mx-auto bg-white w-full bg-white mt-28 mb-18 md:px-0 px-3">
      <div className="md:grid md:grid-cols-4 md:gap-4 mb-20">
        <div className="md:col-span-3">
          <h6 className="text-[#FF6575] pb-4 font-bold">Favorite Course</h6>
          <h1 className="text-[#002058] pb-4 text-4xl font-bold">
            Top Category
          </h1>
        </div>
        <div className="md:col-end-7 md:py-0 py-4 ">
          <button className="border-solid border-2 border-[#B4A7F5] rounded-full px-3 py-2 hover:bg-[#B4A7F5] hover:text-[#fff]">
            All Categories
          </button>
        </div>
        <div className="md:col-span-4">
          <p className="text-[#685F78] md:w-3/4 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-4">
        <div className="border-lg border-[#e9ecef] border-[1px] w-full pb-8 rounded-xl hover:bg-[#413655] group hover:text-[#fff] md:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              className="mt-6"
              src="/e.png"
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt="A"
            ></Image>
          </div>
          <div className="flex justify-center">
            <h6 className="font-bold">Angular</h6>
          </div>
          <div className="flex justify-center pt-2">
            <p className="text-[#685F78] group-hover:text-white">4 Courses</p>
          </div>
        </div>
        <div className="border-lg border-[#e9ecef] border-[1px] w-full pb-8 rounded-xl hover:bg-[#413655] group hover:text-[#fff] md:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              className="mt-6"
              src="/b.png"
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt="A"
            ></Image>
          </div>
          <div className="flex justify-center">
            <h6 className="font-bold">Boostrap</h6>
          </div>
          <div className="flex justify-center pt-2">
            <p className="text-[#685F78] group-hover:text-white">3 Courses</p>
          </div>
        </div>
        <div className="border-lg border-[#e9ecef] border-[1px] w-full pb-8 rounded-xl hover:bg-[#413655] group hover:text-[#fff] md:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              className="mt-6"
              src="/c.png"
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt="A"
            ></Image>
          </div>
          <div className="flex justify-center">
            <h6 className="font-bold">CSS3</h6>
          </div>
          <div className="flex justify-center pt-2">
            <p className="text-[#685F78] group-hover:text-white">3 Courses</p>
          </div>
        </div>
        <div className="border-lg border-[#e9ecef] border-[1px] w-full pb-8 rounded-xl hover:bg-[#413655] group hover:text-[#fff] md:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              className="mt-6"
              src="/d.png"
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt="A"
            ></Image>
          </div>
          <div className="flex justify-center">
            <h6 className="font-bold">Docker Development</h6>
          </div>
          <div className="flex justify-center pt-2">
            <p className="text-[#685F78] group-hover:text-white">2 Courses</p>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10 flex justify-center">
        <button className="w-[50px] h-[15px] bg-[#FF6575] rounded-lg"></button>
        <button className="w-[15px] h-[15px] bg-[#FFDEDA] rounded-full ml-4 hover:w-[50px] hover:h-[15px] hover:bg-[#FF6575]"></button>
      </div>
    </div>
  );
};
export default Top_category;
