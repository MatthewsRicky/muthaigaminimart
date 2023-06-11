"use client";

import { AiOutlineSearch } from "react-icons/ai"
import { BiMenu, BiXCircle } from "react-icons/bi"
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/vercel.svg"
import { useState } from "react";

import About from "../app/about/page";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="text-white">
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
         />
         
         } 
          </button>
      </li>
      </ul>
     </div>

     <div className={` md:flex justify-between py-6 px-4 bg-blue-500/60 bg-opacity-60 ${navbar ? 'block' : 'hidden'}`}>
      <ul className="w-full flex flex-col md:flex-row justify-between items-center  bg-opacity-60">
        
          <li className="flex w-full md:w-auto md:flex justify-center md:px-4 py-4 hover:bg-blue-900 hover:bg-opacity-60 hover:border-b-2 border-blue-500 border-opacity-50 rounded-md hover:shadow-md transition">
            <Link href="/">Home</Link>
          </li>
          <li className="flex w-full md:w-auto md:flex justify-center md:px-4 py-4 hover:bg-blue-900 hover:bg-opacity-60 hover:border-b-2 border-blue-500 border-opacity-50 rounded-md hover:shadow-md transition">
            <Link href="/about">About </Link>
          </li>
          <li className="flex w-full md:w-auto md:flex justify-center md:px-4 py-4 hover:bg-blue-900 hover:bg-opacity-60 hover:border-b-2 border-blue-500 border-opacity-50 rounded-md hover:shadow-md transition">
            <Link href="/whatsapporders">WhatsApp Orders</Link>
          </li>
          <li className="flex w-full md:w-auto md:flex justify-center md:px-4 py-4 hover:bg-blue-900 hover:bg-opacity-60 hover:border-b-2 border-blue-500 border-opacity-50 rounded-md hover:shadow-md transition">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="flex w-full md:w-auto md:flex justify-center md:px-4 py-4 hover:bg-blue-900 hover:bg-opacity-60 hover:border-b-2 border-blue-500 border-opacity-50 rounded-md hover:shadow-md transition">
            <Link href="/location">Location</Link>
          </li>
        </ul>
     </div>
     

     
      
    
      
    </nav>
  );
};

export default Navbar;