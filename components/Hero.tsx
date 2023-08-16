"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import Beer from "../public/images/Beerandwine.png";

const Hero: React.FC = () => {
	return (
		<div className="hero w-full md:my-0 group relative">
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: 0 }} // Final x position (centered on the screen)
				transition={{ duration: 1 }} // Animation duration
				className="mt-[4rem] flex flex-col absolute top-[30%] left-[12%] sm:left-[16%] md:left-[24%] sm:top-20 md:top-16 p-2 md:p-8 rounded-lg mx-auto text-center gap-8 text-[#fff] bg-[#000080]/40 mix-blend-hard-light"
			>
				<div className="block">
					<Image
						src="/public/images/Logo 3.svg"
						alt="Logo"
						width={100}
						height={100}
					/>
				</div>
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
					className="text-2xl  md:text-4xl lg:text-5xl font-bold"
				>
					MUTHAIGA MINI MARKET
				</motion.h1>

				<motion.p
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
					className="text-xl md:text-4xl lg:text-3xl font-semibold"
				>
					Enjoy Shopping
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Hero;
