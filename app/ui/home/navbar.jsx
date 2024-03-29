"use client"
import Link from "next/link"
import NavLinks from "./nav-links";
import { Bars4Icon } from '@heroicons/react/24/outline';
import Logo from '../../../public/PK-black.png'
import Image from "next/image";
import { useState } from "react";



export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
      const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(

        
        
        <div className="flex w-full h-[50px] flex-row items-center bg-black justify-between">

            <div className="px-2">
                <Image className="h-[32px] w-[32px]" src={Logo} alt="image" />
            </div>

           {/* // mobile navbar menu */}
            <div className="px-2 block md:hidden">
                <Bars4Icon className=" h-6 w-6 text-white " onClick={toggleMenu}/>

            </div>
            {/* Normal desktop menu */}
            <div className="  hidden md:flex w-full justify-end">
                <NavLinks />
            </div>

            {/* Mobile menu */}
            {showMenu && (
                <div className="absolute top-[50px] left-0 right-0 bg-black text-white md:hidden ">
                    <NavLinks />
                </div>
            )}



            

            
            
        </div>


    )
}
