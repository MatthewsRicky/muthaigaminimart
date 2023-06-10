"use client"

import Image from "next/image"

import Beverages from "../public/images/beverages.jpeg"

const Hero = () => {
  return (
    <div className="">
      <Image 
        className="w-full"
        src={Beverages}
        alt="Beverages"
      />
      <div className="flex">
        <h1>Welcome to Mutaiga Mini Mart</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil suscipit vitae obcaecati eos asperiores accusantium corrupti laborum fugit aspernatur.
        </p>
        <button className="bg-blue-500/60 p-4 font-semibold rounded-md text-blue-900">
          Find Out More
        </button>
      </div>
      
    </div>
  )
}

export default Hero