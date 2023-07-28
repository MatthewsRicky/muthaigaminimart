"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
	return (
		<div className="w-full  my-[5rem] md:my-0 mx-auto relative">
			<div className="hero absolute inset-0 overflow-y-hidden bg-center"></div>
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: 0 }} // Final x position (centered on the screen)
				transition={{ duration: 1 }} // Animation duration
				className=" border-blue-100 mt-[4rem] bg-blue-950/80 border-2 border-opacity-40 relative z-10 flex flex-col justify-center p-8 rounded-lg items-center mx-20 md:mx-30 lg:mx-40 gap-8 text-white"
			>
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
					MUTHAIGA MINI MARKET
				</h1>
				<p className="text-lg md:text-2xl lg:text-3xl font-semibold">
					Enjoy Shopping
				</p>
				<Link href="/about">
					<button className="bg-orange-500/80 p-4 mt-10 text-3xl scale-75 md:scale-90 lg:scale-100 font-semibold transition hover:scale-105 hover:outline-2 rounded-md w-100">
						Find Out More
					</button>
				</Link>
			</motion.div>
		</div>
	);
};

export default Hero;
