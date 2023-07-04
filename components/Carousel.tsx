"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

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
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="max-w-full h-[780px] w-full py-16 px-36 relative group">
      <div
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="shadow-2xl  w-full h-full rounded-2xl bg-center bg-cover duration-500">
          {/*left arrow*/}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-20 text-2xl rounded-full p-2 bg-blue-900/50 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60}/>
          </div>
          {/*right arrow*/}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-blue-900/50 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60}/>
          </div>
          <div className="hidden group-hover:flex justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={''} className="text-3xl cursor-pointer text-white active:text-white">
                <RxDotFilled 
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)} 
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Carousel