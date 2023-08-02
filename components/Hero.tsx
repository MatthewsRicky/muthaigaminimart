"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion";

const Hero: React.FC = () => {
	return (
		<div className="w-1/2 my-[5rem] md:my-0 mx-auto relative">
			<div className="absolute left-50 inset-0 overflow-y-hidden bg-center"></div>
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: 0 }} // Final x position (centered on the screen)
				transition={{ duration: 1 }} // Animation duration
				className=" border-white mt-[4rem] border-2 border-opacity-40 relative z-10 flex flex-col justify-center p-8 rounded-lg items-center max-w-screen-md mx-auto gap-8 text-[#000080]"
			>
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1.3, ease: "easeOut" }} // Animation duration
					className="text-3xl md:text-3xl font-bold"
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
				<Link href="/about">
					<motion.button
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
						className="hover:bg-white bg-[#000080]/80 p-4 text-white hover:text-[#000080] mt-10 text-3xl scale-75 md:scale-90 lg:scale-100 font-semibold transition hover:scale-105 hover:outline-2 rounded-md w-100"
					>
						Find Out More
					</motion.button>
				</Link>
			</motion.div>
		</div>
	);
};

export default Hero;
