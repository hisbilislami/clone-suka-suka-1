import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Footers() {
  return (
    <footer className="bg-rose-400 pt-32 pb-6">
      <div className="container mx-auto w-full">
        <div className="flex flex-wrap ">
          <div className="w-full px-8 py-5 xl:w-1/4 ">
            <h2 className="font-semibold text-xl text-white mb-5 -mt-16">
              News Letter
            </h2>

            <div className="flex">
              <FaMapMarkerAlt className=" mt-3 text-white"></FaMapMarkerAlt>
              <p className=" mt-2 px-2 text-white">
                {" "}
                7765, karanganyar, Paiton, Probolinggo, Jawa Timur
              </p>
            </div>

            <div className="flex">
              <FaPhoneVolume className=" mt-6 text-white"></FaPhoneVolume>
              <p className=" mt-5 px-2 text-white"> +62 87843526744</p>
            </div>

            <div className="flex">
              <FaRegEnvelope className=" mt-6 text-white"></FaRegEnvelope>
              <p className=" mt-5 px-2 text-white">clone_suka-suka@gmail.com</p>
            </div>
          </div>

          <div className="w-full px-8 py-5 xl:w-1/4 ">
            <h2 className="font-semibold text-xl text-white mb-5 -mt-16">
              For Instructor
            </h2>
            <ul>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Profile
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Login
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Register
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Instructor
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-8 py-5 xl:w-1/4 ">
            <h2 className="font-semibold text-xl text-white mb-5 -mt-16">
              For Student
            </h2>
            <ul>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Profile
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Login
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Student
                </a>
              </li>
              <li className="text-white py-2">
                <a href="#" className="inline-block text-base hover:text-ungu">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full -ml-16 py-5 xl:w-1/4 ">
            <h2 className="font-semibold text-xl text-white mb-5 -mt-16">
              Get More Updates
            </h2>

            <div className="flex rounded bg-white">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full text-justify bg-white text-davysgray rounded-md py-4 placeholder:px-2 border-none outline-none "
              />

              <button className="m-2 text-bold px-4 text-white bg-red-500 rounded">
                Submit
              </button>
            </div>
            <div className="text-white py-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consequat mauris Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut consequat mauris
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 border-t border-slate-50">
          <div className="flex justify-between">
            <p className="text-white py-4"> Categories | Policy</p>

            <p className="text-white py-4 text-right">
              {" "}
              @clone suka suka 2023. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
