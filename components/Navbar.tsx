"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
import Image from "next/image";
import Link from "next/navigation";

import Logo from "../public/vercel.svg"
import { useState } from "react";


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
      <ul className="nav-links">
        {/* Add your navigation links here */}
        <li>About Us</li>
        <li>Contact</li>
        <li>WhatsApp Orders</li>
        <li>Location</li>
      </ul>
      <div className="menu-icon" onClick={toggleNavbar}>
        <i className={`fas ${isClicked ? 'fa-times' : 'fa-bars'}`} />
      </div>
    </nav>
  );
};

export default Navbar;