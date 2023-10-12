import React from "react";
import Image from "next/image";

const Trusted = () => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="py-16 px-4 w-full h-fit bg-white ">
          <div className="pb-12">
            <span className="py-4 flex justify justify-center text-xl font-semibold text-nss-bittersweet">
              Trusted By
            </span>
            <h2 className="flex justify justify-center text-4xl text-blue-950 font-bold">
              500+ Leading Uiversities And Companies
            </h2>
          </div>
          <div className="px-4 flex w-full gap-28">
            <img className="" src="/trusted/lead-01.png" alt="google" />
            <img className="" src="/trusted/lead-02.png" alt="colruyt" />
            <img className="" src="/trusted/lead-03.png" alt="oxford" />
            <img className="" src="/trusted/lead-04.png" alt="dexie" />
            <img className="" src="/trusted/lead-05.png" alt="positech" />
            <img className="" src="/trusted/lead-06.png" alt="spike" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
