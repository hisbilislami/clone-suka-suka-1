import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function ChekcoutReview() {
  return (
    <div className="w-full relative">
      <div className="min-h-[500px] bg-[url('/background.jpg')] bg-no-repeat my-20">
        <div className="container mx-auto w-full relative">
          <h1 className="text-white mb-4 text-2xl font-bold text-center pt-20">
            Check out these real reviews
          </h1>
          <h1 className="text-white mb-4 text-4xl font-bold text-center mt-4">
            Users-love-us Don’t take it from us.
          </h1>
        </div>
      </div>
      <div className="absolute w-full top-[25%] flex justify-center">
        <di className="container mx-auto bg-gradient-to-b from-[#57504d] to-[#ffffff] max-w-[70%] border-[15px] border-[#ededed] border-solid h-2/5 rounded-[50px]">
          <div className="relative">
            <div className="absolute -top-8">
              <Image
                className=""
                src="/quote.png"
                width={300}
                height={300}
                alt="A"
                style={{
                  width: "120px",
                  height: "80px",
                }}
              ></Image>
            </div>
            <div className="absolute top-6 right-6">
              <Image
                className="rotate-180"
                src="/quote.png"
                width={300}
                height={300}
                alt="A"
                style={{
                  width: "60px",
                  height: "40px",
                }}
              ></Image>
            </div>
          </div>
          <p className="text-center text-white font-bold text-xl px-20 pt-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 w-full px-20 pb-20">
            <div className="justify-self-start">
              <button type="button" className="bg-white p-6">
                <FaArrowLeft className="text-xl text-[#392C7D]" />
              </button>
            </div>
            <div className="justify-self-center">
              <Image
                className="rounded-full m-auto mb-4"
                src="/user1.jpg"
                width={300}
                height={300}
                alt="A"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              ></Image>
              <h6 className="font-bold text-xl text-center mb-4">
                Daziy Millar
              </h6>
              <p className="text-[#685f78] text-center">Managing Director</p>
            </div>
            <div className="justify-self-end">
              <button type="button" className="bg-white p-6">
                <FaArrowRight className="text-xl text-[#392C7D]" />
              </button>
            </div>
          </div>
        </di>
      </div>
    </div>
  );
}

export default ChekcoutReview;
