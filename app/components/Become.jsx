import React from "react";
import Image from "next/image";

const Become = () => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="relative px-4 py-10 grid grid-cols-2 gap-4 w-full h-full bg-white">
          {/* Become An Instructor */}
          <div className="p-5 w-full h-64 bg-red-100 rounded-lg">
            <h3 className=" text-blue-950 text-2xl font-bold">
              Become An Intstructor
            </h3>
            <p className="pt-6 font-medium text-neutral-500 text-xl w-3/5">
              Top instructors from around the world teach millions of students
              on Mentoring.
            </p>
            <div className="static">
              <Image
                className="p-6 absolute inset-y-8 left-1/4  "
                width={400}
                height={400}
                src="/become/become-02-1.png"
                alt="Become Instructors"
              />
            </div>
          </div>

          {/* Access To Education */}
          <div className="p-5 w-full h-64 bg-yellow-200 rounded-lg">
            <h3 className=" text-blue-950 text-2xl font-bold">
              Transform Access To Education
            </h3>
            <p className="pt-6 font-medium text-neutral-500 text-xl w-3/5">
              Create an account to receive our newsletter, course
              recommendations and promotions.
            </p>
            <Image
              className="p-2 absolute inset-y-8 right-0 "
              width={270}
              height={270}
              src="/become/become-01.png"
              alt="Become Instructors"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Become;
