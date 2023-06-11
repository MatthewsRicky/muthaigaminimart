"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/vercel.svg"
import { useState } from "react";

import About from "../app/pages/About";


const Navbar: React.FC = () => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
    
  };

  return (
    <nav className={`navbar ${isClicked ? 'open' : ''}`}>
    
      <div className="md:hidden lg:hidden xl:hidden cursor-pointer bg-blue-500/60 p-4 font-semibold flex justify-center rounded-md w-20" onClick={toggleNavbar}>
            <BiMenu 
              size={26}
            />
      </div>
     
      <ul className="w-full hidden md:flex justify-between py-6 px-4 bg-blue-500/60 bg-opacity-60">
        <li>
          <div className="logo">
            <Image 
              src={Logo}
              alt="logo icon"
              width={100}
            />
          </div>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/"><About /></Link>
        </li>
        <li>
          <Link href="/WhatsappOrders">WhatsApp Orders</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/location">Location</Link>
        </li>
      </ul>
      
    
      
    </nav>
  );
};

export default Navbar;