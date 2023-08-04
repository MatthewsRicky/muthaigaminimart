"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import Beer from "../public/images/Beerandwine.png";

const Hero: React.FC = () => {
	return (
		<div className="hero w-full my-[5rem] md:my-0 mx-auto relative">
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: [0, 100, -300] }} // Final x position (centered on the screen)
				transition={{ duration: [1, 1] }} // Animation duration
				className="mt-[4rem] relative z-10 flex flex-col justify-center p-8 rounded-lg items-center max-w-screen-md mx-auto gap-8 text-white mix-blend-color-dodge"
			>
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.3, ease: "easeOut" }} // Animation duration
					className="text-4xl md:text-4xl font-bold"
				>
					MUTHAIGA MINI MARKET
				</motion.h1>
				<motion.p
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
					className="text-lg md:text-2xl lg:text-3xl font-semibold"
				>
					Enjoy Shopping
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Hero;
