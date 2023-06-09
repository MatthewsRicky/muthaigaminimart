"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import Image from "next/image";

import Logo from "../public/vercel.svg"

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {
  return (
    <div className="w-full">
      <div className="w-full md:flex lg:flex xl:flex hidden justify-between gap-x-3 py-6 px-4 bg-blue-200 items-center">
        <div className="mmm_logo">
          <Image 
            width={80}
            src={Logo}
            alt="logo" 
          />
        </div>
        <div className="about_us">
          About Us
        </div>
        <div className="location">
          Location
        </div>
        <div className="whatsapp_orders">
          Whatsapp Orders
        </div>
        <div className="contact">
          Contacts
        </div>
        <div className="search_icon">
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
      
      <div className="w-full hidden md:hidden lg:hidden xl:hidden items-center flex-col gap-y-3 py-6 px-4 bg-blue-200">
        <div className="mmm_logo sm:flex">
          <Image 
            width={80}
            src={Logo}
            alt="logo" 
          />
        </div>
        <div className="about_us">
          About Us
        </div>
        <div className="location">
          Location
        </div>
        <div className="whatsapp_orders">
          Whatsapp Orders
        </div>
        <div className="contact">
          Contacts
        </div>
        <div className="search_icon">
          <AiOutlineSearch 
            size={26}
          />
        </div>
      </div>
    </div>
   
  )
}

export default Navbar