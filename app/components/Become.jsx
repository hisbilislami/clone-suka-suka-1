import React from "react";
import Image from "next/image";

const Become = () => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="relative container mx-auto py-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FFDEDA] p-8 rounded-3xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <h6 className="font-bold text-2xl mb-4">
                    Become An Instructor
                  </h6>
                  <p>
                    Top instructors from around the world teach millions of
                    students on Mentoring.
                  </p>
                </div>
                <div>
                  <Image
                    className=""
                    src="/become1.png"
                    width={300}
                    height={300}
                    alt="A"
                    style={{
                      width: "100%",
                      height: "170px",
                    }}
                  ></Image>
                </div>
              </div>
            </div>

            {/* Access To Education */}
            <div className="bg-[#FFE88F] p-8 rounded-3xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <h6 className="font-bold text-2xl mb-4">
                    Transform Access To Education
                  </h6>
                  <p>
                    Create an account to receive our newsletter, course
                    recommendations and promotions.
                  </p>
                </div>
                <div>
                  <Image
                    className=""
                    src="/become-02.png"
                    width={300}
                    height={300}
                    alt="A"
                    style={{
                      width: "100%",
                      height: "170px",
                    }}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Become;
