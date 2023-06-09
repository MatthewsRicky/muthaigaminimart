"use client";

import { AiOutlineSearch } from "react-icons/ai"
import Image from "next/image";

import Logo from "../public/vercel.svg"

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {
  return (
    <div className="w-full flex p-10 ">
      <div className="w-full flex justify-between flex-row gap-x-3">
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
    </div>
   
  )
}

export default Navbar