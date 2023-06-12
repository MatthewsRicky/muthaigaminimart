"use client"

import { useState } from "react";

interface CarouselProps {
  images: string[];
  captions: string[]
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  captions
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide -1));
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length -1 ? 0 : prevSlide + 1));
  }

  return (
    <div className="carousel relative w-full h-96">
      <div className="slide-container flex transition-transform duration-500 ease-in-out transform">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide flex-shrink-0 w-full h-full relative ${
              index === currentSlide ? 'scale-110 shadow-lg' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="caption absolute bottom-2 left-2 bg-blue-800 bg-opacity-80 text-white px-4 py-2 text-xl font-bold transition">
              {captions[index]}
            </div>
          </div>
        ))}
      </div>
      <button
        className="prev-button absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-white bg-blue-800 bg-opacity-80 px-3 py-2 rounded-full transition"
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="next-button absolute top-1/2 transform -translate-y-1/2 right-4 text-2xl text-white bg-blue-800 bg-opacity-80 px-3 py-2 rounded-full transition"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  )
}

export default Carousel