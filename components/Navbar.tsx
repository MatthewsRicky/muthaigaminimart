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
      {/* Your navbar content goes here */}
      <div className="logo">
        <Image 
          src={Logo}
          alt="logo icon"
        />
      </div>
      <ul className="w-full flex justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/About">About</Link>
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
        <li>
          <div className="menu-icon md:hidden lg:hidden  xl:hidden" onClick={toggleNavbar}>
            <BiMenu 
              size={26}
            />
          </div>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;