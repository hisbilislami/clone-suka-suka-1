import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function JoinMentor() {
  return (
    <>
      <div className=" bg-snow w-full">
        <div className="container mx-auto w-full flex flex-row">
          <div className="w-full">
            <Image
              className="mt-6"
              src="/share.png"
              width="700"
              height="700"
              alt="Share"
            ></Image>
          </div>

          <div className="w-full px-4 py-16">
            <h1 className="font-bold text-ungu text-4xl">
              Want to share your knowledge? Join us a Mentor
            </h1>
            <p className="pt-8 text-davysgray text-xl">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>

            <div>
              <h2 className=" pt-10 text-davysgray font-bold inline-flex text-xl">
                <FaCheckCircle className="mr-2 m-auto text-red-400" />
                Best Courses
              </h2>
            </div>

            <h2 className=" pt-8 text-davysgray font-bold inline-flex text-xl">
              <FaCheckCircle className="mr-2 m-auto text-red-400" />
              Top rated Instructors
            </h2>

            <div className="w-1/4 mr-32 pt-8">
              <button className="border-solid border-2 border-[#B4A7F5] rounded-full px-8 py-3 hover:bg-[#B4A7F5] hover:text-[#fff] text-davysgray">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinMentor;
