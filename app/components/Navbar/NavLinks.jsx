import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { links } from "./MyLinks"

const NavLinks = () => {

    return (
        <>
            {links.map((Link) => (
                <div>
                    <div class="text-left md:cursor-pointer group">
                        <h1 class="py-7 flex justify-betwen items-center md:pr-0 ">
                            {Link.name}
                            <span class="ml-2">
                                <HiOutlineChevronDown />
                            </span>
                        </h1>
                        {Link.submenu && (
                            <div>
                                <div class="absolute top-20 hidden group-hover:block hover:block">
                                    <div class="py-3">
                                        <div class="w-5 h-5 left-8 absolute mt-2 bg-white rotate-45">
                                        </div>
                                    </div>
                                    <div class="bg-white pl-4 pt-3 pb-1 pr-20 rounded">
                                        {
                                            Link.sublinks.map((mysublinks) => (
                                                <div>
                                                    <h1 text-lg font-semibold></h1>
                                                    {mysublinks.sublink.map((slink) => (
                                                        <li class="my-3 hover:text-nss-bittersweet p-1">{slink.name}</li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            ))}
        </>
    )
}

export default NavLinks
