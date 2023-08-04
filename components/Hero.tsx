"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import Beer from "../public/images/Beerandwine.png";

const Hero: React.FC = () => {
	return (
		<div className="hero w-full my-[5rem] md:my-0 relative">
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: 0 }} // Final x position (centered on the screen)
				transition={{ duration: [1, 1] }} // Animation duration
				className="mt-[4rem] relative flex flex-col justify-center p-8 rounded-lg items-center max-w-screen-md mx-auto text-center gap-8 text-white mix-blend-hard-light"
			>
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.3, ease: "easeOut" }} // Animation duration
					className="text-3xl  md:text-6xl font-bold"
				>
					MUTHAIGA MINI MARKET
				</motion.h1>
				<motion.p
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
					className="text-3xl md:text-4xl lg:text-3xl font-semibold"
				>
					Enjoy Shopping
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Hero;
