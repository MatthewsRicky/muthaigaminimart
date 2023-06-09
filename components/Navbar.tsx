"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import Image from "next/image";
import Link from "next/navigation";

import Logo from "../public/vercel.svg"
import { useState } from "react";

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {

  const [isClicked, setIsClicked] = useState();

  return (
    <div className="w-full">
      <div className="w-full md:flex lg:flex xl:flex hidden justify-between gap-x-3 py-6 px-4 bg-blue-200 items-center">
        <div className="mmm_logo hover:scale-110 hover:text-neutral-600 cursor-pointer">
          <Image 
            width={80}
            src={Logo}
            alt="logo" 
          />
        </div>
        <div className="about_us hover:scale-110 hover:text-neutral-600 cursor-pointer">
          About Us
        </div>
        <div className="location hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Location
        </div>
        <div className="whatsapp_orders hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Whatsapp Orders
        </div>
        <div className="contact hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Contacts
        </div>
        <div 
          onClick={() => {}}
          className="search_icon hover:scale-110 hover:text-neutral-600 cursor-pointer">
          <AiOutlineSearch 
            size={26}
          />
        </div>
      </div>
      <div className="flex justify-between md:hidden lg:hidden xl:hidden gap-x-3 py-6 px-4 bg-blue-200 items-center">
        <div className="mmm_logo">
          <Image 
            width={80}
            src={Logo}
            alt="logo" 
          />
        </div>
        <button 
          onClick={() => {}}
          className=""
        >
          <BiMenu
            size={40}
          />
        </button> 
      </div>
      
      <div className="w-full md:hidden lg:hidden xl:hidden items-center flex-col gap-y-3 py-6 px-4 bg-blue-200">
        <div className="mmm_logo sm:flex">
          <Image 
            className="cursor-pointer hover: hover:scale-110 hover:text-neutral-600"
            width={80}
            src={Logo}
            alt="logo" 
          />
        </div>
        <div className="about_us hover:scale-110 hover:text-neutral-600 cursor-pointer">
          About Us
        </div>
        <div className="location hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Location
        </div>
        <div className="whatsapp_orders hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Whatsapp Orders
        </div>
        <div className="contact hover:scale-110 hover:text-neutral-600 cursor-pointer">
          Contacts
        </div>
        <div className="search_icon hover:scale-110 hover:text-neutral-600 cursor-pointer">
          <AiOutlineSearch 
            size={26}
          />
        </div>
      </div>
    </div>
   
  )
}

export default Navbar