import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
	"public/images/whisky.png",
	"public/images/candy2.png",
	"public/images/insecticides.png",
	// Add more image URLs here
];

const CarouselHero: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-40vh w-screen overflow-hidden">
			<AnimatePresence exitBeforeEnter>
				<motion.img
					key={currentIndex}
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					className="absolute h-full w-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
				>
					Overlay Text
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default CarouselHero;
