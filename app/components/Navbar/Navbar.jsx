import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex items-center font-medium justify-center w-[auto]">
        <div className="z-50 pr-8">
          <img
            className="md:cursor-pointer h-10 mr-24 "
            src="/logo.svg"
            alt="Your Company"
          />
        </div>
        <ul className="flex items-center gap-4 text-slate-700 font-medium justify-between w-full">
          <li>
            <Link href="/" className="inline-block text-nss-bittersweet ">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link href="/" className="inline-block ">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="inline-block ">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
        </ul>
        <div className="ml-10 mr-2">
          <button className="bg-white text-slate-700 font-medium py-4 px-10 rounded-full text-hover:white hover:bg-violet-950 hover:text-white">
            Login
          </button>
        </div>
        <div>
          <button className="border-4 border-indigo-500/50 text-indigo-500/50  font-medium py-3 px-8 rounded-full hover:bg-nss-bittersweet hover:border-nss-bittersweet hover:text-white">
            Register
          </button>
        </div>
        {/* Mobile Mode
                <ul className={`md:hidden bg-white absolute w-full bottom-0 py-24 pl-4`}>
                    <li>
                        <Link to="/" className="inline-block "> Home </Link>
                    </li>
                    <NavLinks />
                </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
