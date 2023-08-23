"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "@/src/public/images/g1.png";

const About = () => {
	return (
		<div className="text-white w-full">
			<div className="about w-full md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="mt-[4rem] flex flex-col justify-center items-center absolute top-[37%] left-[30%] sm:left-[30%] md:left-[22%] lg:left-[24%] xl:left[45%] md:top-[24%] p-4 mx-auto text-center gap-8 bg-[#fff] text-[#000080]"
					//className="text-blue-950 flex justify-center mt-[8rem] md:m-0 items-center bg-white"
				>
					<div className="flex justify-center items-center gap-4">
						<div className="">
							<Image
								src={Logo}
								alt="Logo"
								width={100}
								height={100}
							/>
						</div>
						<motion.h1
							initial={{ x: -300 }} // Initial x position (off the screen to the left)
							animate={{ x: 0 }} // Final x position (centered on the screen)
							transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
							className="text-lg md:text-xl lg:text-3xl font-bold"
						>
							ABOUT MUTHAIGA MINI MARKET
						</motion.h1>
					</div>
				</motion.div>
			</div>
			<div className="flex w-full bg-blue-200/20 drop-shadow-2xl text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market <i>{`>`}</i> About
				</motion.h1>
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
					<button
						className="bg-[#ff2800]/80 p-4 mt-10
					text-white text-2xl md:text-3xl lg:text-4xl scale-75 md:scale-90 lg:scale-100 font-semibold transition hover:scale-105 hover:outline-2 rounded-lg w-100"
					>
						Talk to Us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default About;
