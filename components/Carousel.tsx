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
  {url: '/images/mmm3.jpeg'},
]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          {/*left arrow*/}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blue-500/30 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60}/>
          </div>
          {/*right arrow*/}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blue-500/30 text-white cursor-pointer">
            <BsChevronCompactRight size={60}/>
          </div>
        </div>
    </div>
  )
}

export default Carousel