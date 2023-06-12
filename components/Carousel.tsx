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

  return (
    <div>Carousel</div>
  )
}

export default Carousel