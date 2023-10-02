import React from "react";
import Image from "next/image";

const Unaccess = () => {
  return (
    <>
      <div className="w-full h-fit bg-gradient-to-r from-mistyrose from-10% via-mistyrose via-10% to-aliceblue to-90% ">
        <div className="container mx-auto w-full">
          <div className="flex justify justify-center">
            <h2 className="w-1/2 mt-10 text-center text-4xl text-blue-950 font-bold">
              Unlimited access to 360+ courses and 1,600+ hands-on labs
            </h2>
          </div>
          <div className="flex justify justify-center py-10 px-4 flex w-full gap-10">
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-1.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-2.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-3.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-4.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-5.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-6.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-7.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-8.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-9.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-fit h-fit p-3 bg-white rounded-lg">
              <Image
                className="w-16 h-16"
                src="/access/icon-10.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unaccess;
