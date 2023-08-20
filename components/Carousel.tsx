"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
	const slides = [
		{ url: "/images/bx_juice.png" },
		{ url: "/images/bottled_juice.png" },
		{ url: "/images/candy2.png" },
		{ url: "/images/Beerandwine.png" },
		{ url: "/images/sunscreen.png" },
		{ url: "/images/wines.png" },
		{ url: "/images/whisky.png" },
		{ url: "/images/dairy.png" },
		{ url: "/images/spices.png" },
		{ url: "/images/insecticides.png" },
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
				className="shadow-2xl  w-full h-full rounded-2xl bg-center bg-cover duration-500"
			>
				{/*left arrow*/}
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[20%] md:left-[20%] lg:left-[16%] text-2xl rounded-full p-2 bg-blue-900/90 text-white cursor-pointer">
					<BsChevronCompactLeft
						onClick={prevSlide}
						size={50}
					/>
				</div>
				{/*right arrow*/}

				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[20%] md:right-[20%] lg:right-[16%] text-2xl rounded-full p-2 bg-blue-900/90 text-white cursor-pointer">
					<BsChevronCompactRight
						onClick={nextSlide}
						size={50}
					/>
				</div>

				<div className="flex justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={""}
							className="text-3xl cursor-pointer text-white active:text-[#000080]"
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
