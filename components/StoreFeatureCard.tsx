"use client";

import { motion, animate } from "framer-motion";
import ImageCard from "../components/ImageCards";
import Carousel from "./Carousel";

const StoreFeatureCard = () => {
	return (
		<div className="">
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market
				</motion.h1>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col justify-center items-center gap-8 md:w-[80%] md:my-20 mx-auto px-10 h-[40vh] overflow-hidden text-blue-900">
					<h1 className="mt-20 text-2xl md:text-3xl lg:6xl font-semibold">
						WELCOME TO MUTHAIGA MINI MARKET
					</h1>
					<p className="bg-blue-200/20 md:text-xl lg:4xl p-4 my-12 shadow-xl">
						Muthatiga Mini Mart is a beloved destination in the heart of Diani
						Beach, a stunning coastal paradise. Our mini super market caters to
						the diverse needs of residents and visitors alike. Offering an
						extensive range of products and services, from locally sourced fresh
						produce to gourmet snacks and beach essentials, we strive to meet
						every customer's needs. With a friendly and inviting atmosphere,
						Muthatiga Mini Mart is dedicated to providing exceptional customer
						service, ensuring a convenient and enjoyable shopping experience in
						the vibrant Diani Beach community.
					</p>
				</div>

				<div>
					<Carousel />
				</div>
			</div>
		</div>
	);
};

export default StoreFeatureCard;
