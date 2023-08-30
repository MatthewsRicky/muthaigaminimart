"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
	const slides = [
		{ url: "/images/ciggaretes.jpg" },
		{ url: "/images/coffee.jpg" },
		{ url: "/images/soda.jpg" },
		{ url: "/images/oils.jpg" },
		{ url: "/images/vinegars_oils.jpg" },
		{ url: "/images/water.jpg" },
		{ url: "/images/soapsanddetergents.jpg" },
		{ url: "/images/teasandcoffees.jpg" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="min-w-[50%] h-[100%] w-full relative group">
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex].url})`,
				}}
				className="shadow-md shadow-[#ff2800]/60 w-full h-full rounded-lg bg-center bg-cover duration-500"
			>
				{/*left arrow*/}
				<div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[5%] md:left-[10%] lg:left-[16%] text-2xl rounded-full p-2 bg-white text-[#000080] cursor-pointer font-bold">
					<BsChevronCompactLeft
						onClick={prevSlide}
						size={50}
					/>
				</div>
				{/*right arrow*/}

				<div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[5%] md:right-[10%] lg:right-[16%] text-2xl rounded-full p-2 bg-white text-[#000080] cursor-pointer font-bold">
					<BsChevronCompactRight
						onClick={nextSlide}
						size={50}
					/>
				</div>

				<div className="flex justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={""}
							className="text-3xl cursor-pointer text-[#ff2800]/80 active:text-[#000080]"
						>
							<RxDotFilled
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
