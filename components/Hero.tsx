"use client"

import Link from "next/link"

import About from "../app/about/page"

const Hero: React.FC = () => {
  return (
    <div className="w-full mb-10 mx-auto p-10 relative">
      <div 
        className="hero absolute inset-0 bg-cover overflow-y-hidden bg-opacity-50 bg-center"></div>
        <div className="border-blue-900 relative z-10 flex flex-col justify-center items-center gap-8 text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">High Quality Beverage Selection</h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <Link href="/about">
            <button className="bg-blue-800/80 p-4 mt-10 text-3xl scale-75 md:scale-90 lg:scale-100 font-semibold rounded-md w-100">
              Find Out More
            </button>
          </Link>
         
      </div>
    </div>
  )
}

export default Hero