"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import Beer from "../public/images/Beerandwine.png";
import Logo from "../public/images/g1.png";
import { Container } from "postcss";

const Hero: React.FC = () => {
	return (
		<div className="hero flex justify-center items-center w-[70%] group relative">
			<motion.div
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
				animate={{ x: 0 }} // Final x position (centered on the screen)
				transition={{ duration: 1 }} // Animation duration
				//className="mt-[4rem] flex flex-col absolute top-[30%] left-0 sm:left-[16%] md:left-[20%] xl:left-[33%] sm:top-20 md:top-16 p-2 md:p-8 rounded-lg mx-auto text-center gap-8 text-[#fff] text-sm bg-[#000080]/40 mix-blend-hard-light"
				className="text-blue-950 flex justify-center mt-[8rem] md:m-0 items-center bg-white"
			>
				<div className="flex justify-center items-center p-2 gap-4">
					<div className="p-2">
						<Image
							src={Logo}
							alt="Logo"
							width={100}
							height={100}
						/>
					</div>
					<div>
						<motion.h1
							initial={{ x: -300 }} // Initial x position (off the screen to the left)
							animate={{ x: 0 }} // Final x position (centered on the screen)
							transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
							className="text-lg  md:text-2xl lg:text-4xl xl:text-5xl font-bold"
						>
							MUTHAIGA MINI MARKET
						</motion.h1>
						<motion.p
							initial={{ x: -300 }} // Initial x position (off the screen to the left)
							animate={{ x: 0 }} // Final x position (centered on the screen)
							transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
							className="text-md md:text-lg lg:text-3xl xl:text-4xl font-semibold"
						>
							Enjoy Shopping
						</motion.p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
