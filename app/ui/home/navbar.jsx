"use client"

import NavLinks from "./nav-links";
import { Bars4Icon,XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../../../public/PK-black.png'
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";



export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
      const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    

    return(



        <div className="flex w-full h-[55px] md:h-[70px] flex-row items-center bg-black justify-between" >
            <div className="px-2 md:px-4">
                <Image className="h-[34px] w-[34px] md:h-[50px] md:w-[50px]" src={Logo} alt="image" />
            </div>

           {/* // mobile navbar menu */}
            <div className="px-2 block md:hidden">
                {
                    !showMenu?(
                        <Bars4Icon className=" h-8 w-8 text-white " onClick={toggleMenu}/>):
                        (<XMarkIcon className=" h-8 w-8 text-white " onClick={toggleMenu}/>)
                }
                
            </div>
            {/* Normal desktop menu */}
            <div className="hidden md:flex w-full justify-end  ">
                <NavLinks />
            </div>

            {/* Mobile menu */}
            {showMenu && (
                <div className="absolute top-[50px] left-0 right-0 bg-black md:hidden  ">
                    <NavLinks />
                </div>
            )}
        </div>


    )
}
