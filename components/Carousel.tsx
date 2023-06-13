"use client";
"use client"

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = () => {
const slides = [
  {url: '/images/bananas.jpeg'},
  {url: '/images/beverages.jpeg'},
  {url: '/images/cheese.jpeg'},
  {url: '/images/mmm1.jpeg'},
  {url: '/images/mmm2.jpeg'},
]

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      <div
        style={{backgroundImage: `url(${slides[0].url})`}} 
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          {/*left arrow*/}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blue-500/30 text-white cursor-pointer">
            <BsChevronCompactLeft size={60}/>
          </div>
          {/*right arrow*/}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blue-500/30 text-white cursor-pointer">
            <BsChevronCompactRight size={60}/>
          </div>
        </div>
    </div>
  )
}

export default Carousel