"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="text-white w-full">
			<div className="hero w-full my-[5rem] md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="mt-[4rem] flex flex-col absolute top-[30%] left-[12%] sm:left-[16%] md:left-[24%] sm:top-20 md:top-16 p-8 rounded-lg mx-auto text-center gap-8 text-[#fff] bg-[#000080]/40 mix-blend-hard-light"
				>
					<motion.h1
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
						className="text-3xl  md:text-4xl lg:text-5xl font-bold"
					>
						ABOUT
					</motion.h1>
				</motion.div>
			</div>
			<div className="flex w-full bg-blue-950/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>Muthaiga mini Market <i>></i> About</motion.h1>
			</div>
			<div className="flex flex-col justify-center items-center text-blue-950 p-8 m-8 drop-shadow-xl">
				<p className="text-lg md:text-xl lg:text-2xl font-semi-bold bg-blue-200/40 rounded-xl p-4 ">
					<i>Muthatiga Mini Market</i> is a beloved destination in the heart of
					Diani Beach, a stunning coastal paradise. Our mini super market caters
					to the diverse needs of residents and visitors alike. Offering an
					extensive range of products and services, from locally sourced fresh
					produce to gourmet snacks and beach essentials, we strive to meet
					every customer's needs. With a friendly and inviting atmosphere,
					Muthatiga Mini Mart is dedicated to providing exceptional customer
					service, ensuring a convenient and enjoyable shopping experience in
					the vibrant Diani Beach community.
				</p>
				<Link href="/contact">
					<button className="bg-orange-500/80 p-4 mt-10 text-2xl md:text-3xl lg:text-4xl scale-75 md:scale-90 lg:scale-100 font-semibold transition hover:scale-105 hover:outline-2 rounded-lg w-100">
						Talk to Us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default About;
