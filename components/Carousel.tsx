"use client";
"use client"

import { useState } from "react";

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
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
    </div>
  )
}

export default Carousel