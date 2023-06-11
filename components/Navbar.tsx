"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu, BiXCircle } from "react-icons/bi"
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/vercel.svg"
import { useState } from "react";

import About from "../app/pages/About";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="">
     <div>
      <ul className="flex w-full py-6 px-4 bg-blue-500/60 justify-between md:hidden cursor-pointer p-4 font-semibold rounded-md">
      <li>
            <Image 
              src={Logo}
              alt="logo icon"
              width={100}
            />
        </li>
        <li>
          <button className=" rounded-md w-20" onClick={() => setNavbar(!navbar)}>
           {navbar ? (
            <BiXCircle 
            size={26}
          />
           ): <BiMenu 
           size={26}
         />} 
          </button>
      </li>
      </ul>
     </div>
      <ul className="w-full hidden md:flex justify-between py-6 px-4 bg-blue-500/60 bg-opacity-60">
        <li>
            <Image 
              src={Logo}
              alt="logo icon"
              width={100}
            />
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

      <div className="small_menu hidden flex-col bg-blue-500/60">
        <ul>
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
      </div>
      
      
    
      
    </nav>
  );
};

export default Navbar;