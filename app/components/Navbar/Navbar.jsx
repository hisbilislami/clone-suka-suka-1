import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="pl-10 mt-3">
      <div class="flex items-center font-medium justify-around">
        <div class="z-50">
          <img
            class="md:cursor-pointer h-10 mr-24 "
            src="/logo.svg"
            alt="Your Company"
          />
        </div>
        <ul class="md:flex hidden items-center gap-4 text-slate-700 font-medium">
          <li>
            <Link href="/" class="inline-block text-nss-bittersweet ">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link href="/" class="inline-block ">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" class="inline-block ">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
        </ul>
        <div class="ml-10 mr-2">
          <button class="bg-white text-slate-700 font-medium py-4 px-10 rounded-full text-hover:white hover:bg-violet-950 hover:text-white">
            Login
          </button>
        </div>
        <div class="pr-20">
          <button class="border-4 border-indigo-500/50 text-indigo-500/50  font-medium py-3 px-8 rounded-full hover:bg-nss-bittersweet hover:border-nss-bittersweet hover:text-white">
            Register
          </button>
        </div>
        {/* Mobile Mode
                <ul class={`md:hidden bg-white absolute w-full bottom-0 py-24 pl-4`}>
                    <li>
                        <Link to="/" class="inline-block "> Home </Link>
                    </li>
                    <NavLinks />
                </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
