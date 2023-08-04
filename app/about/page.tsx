"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="text-white w-full">
			<div className="hero flex justify-center items-center  relative">
				<motion.h2
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="py-4 px-6 rounded-md shadow-md shadow-orange-500/90 text-4xl md:text-6xl lg:text-8xl text-orange-500/90 bg-blue-950/80 mx-[15%] transition-all duration-300"
				>
					Muthatiga Mini Mart
				</motion.h2>
			</div>

			<div className="flex flex-col justify-center items-center text-blue-950 p-8 m-8 drop-shadow-xl">
				<p className="text-lg md:text-2xl lg:text-3xl font-semi-bold bg-blue-200/40 rounded-xl p-4 ">
					<i>Muthatiga Mini Mart</i> is a beloved destination in the heart of
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
