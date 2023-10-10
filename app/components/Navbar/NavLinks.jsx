import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { links } from "./MyLinks";

const NavLinks = () => {
  return (
    <>
      {links.map((Link) => (
        <div>
          <div className="text-left md:cursor-pointer group">
            <h1 className="py-7 flex justify-betwen items-center md:pr-0 ">
              {Link.name}
              <span className="ml-2">
                <HiOutlineChevronDown />
              </span>
            </h1>
            {Link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-5 h-5 left-8 absolute mt-2 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white w-52 rounded">
                    {Link.sublinks.map((mysublinks) => (
                      <div className="grid grid-cols-1 divide-y">
                        <h1 text-lg font-semibold></h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="my-3 hover:text-nss-bittersweet p-1">
                            {slink.name}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
