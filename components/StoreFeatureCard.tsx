"use client";

import { motion, animate } from "framer-motion";
import ImageCard from "../components/ImageCards";
import Carousel from "./Carousel";
import FaqDisplay from "./FaqDisplay";

const StoreFeatureCard = () => {
	return (
		<div className="h-[100vh]">
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market
				</motion.h1>
			</div>
			<h1 className="flex justify-center items-center text-[#000080] mt-20 text-2xl md:text-3xl lg:6xl font-semibold">
				WELCOME TO MUTHAIGA MINI MARKET
			</h1>
			<div className="flex flex-col justify-center lg:justify-start items-center lg:flex-row">
				<div className="flex flex-col justify-center items-center gap-8 md:w-[80%] lg:max-w-[70%] md:my-20 mx-auto px-10 lg:h-[40vh] overflow-hidden text-[#000080]">
					<p className="flex justify-between items-center bg-blue-200/20 md:text-xl lg:4xl p-4 my-12 h-[30rem] lg:h-[30rem] shadow-xl">
						Muthatiga Mini Market is a beloved destination in the heart of Diani
						Beach, a stunning coastal paradise. Our mini super market caters to
						the diverse needs of residents and visitors alike. Offering an
						extensive range of products and services, from locally sourced fresh
						produce to gourmet snacks and beach essentials, we strive to meet
						every customer's needs. With a friendly and inviting atmosphere,
						Muthatiga Mini Market is dedicated to providing exceptional customer
						service, ensuring a convenient and enjoyable shopping experience in
						the vibrant Diani Beach community.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row flex-wrap justify-center items-center my-20 gap-8">
				<ImageCard
					imageSrc="/images/wines.png"
					title="Alcoholic Bevereages"
					description="Fully stocked Liquor Store"
				/>
				<ImageCard
					imageSrc="/images/sodas.png"
					title="Non-alcoholic Beverages"
					description="Soda And Juices"
				/>
				<ImageCard
					imageSrc="/images/coffee.png"
					title="Coffee"
					description="Coffee selection"
				/>
				<ImageCard
					imageSrc="/images/insecticides.png"
					title="Repellants and Insecticedes"
					description="Protect yourself and your Home."
				/>
			</div>
			<div className="h-[40%] md:h-[60%] my-[2rem] mx-[10%] md:mx-[25%]">
				<Carousel />
			</div>
		</div>
	);
};

export default StoreFeatureCard;
