"use client";

import { motion, animate } from "framer-motion";
import ImageCard from "../components/ImageCards";

const StoreFeatureCard = () => {
	return (
		<div>
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market
				</motion.h1>
			</div>
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
			<div className="flex mx-12 md:min-w-[350px] justify-center items-center flex-col md:flex-row mt-10 md:row-span-2 gap-8 md:gap-10 flex-wrap">
				<ImageCard
					imageSrc="/images/candy2.png"
					title="Candy"
					description="Wide selection of candies"
				/>
				<ImageCard
					imageSrc="/images/wines.png"
					title="Wines"
					description="All Your Favorite Beverages in one spot"
				/>
				<ImageCard
					imageSrc="/images/water.png"
					title="Cigarettes"
					description="Grab your Brand cigattes"
				/>
				<ImageCard
					imageSrc="/images/mmm7.jpeg"
					title="Household Goods"
					description="Fully Stocked Super Market"
				/>
			</div>
		</div>
	);
};

export default StoreFeatureCard;
