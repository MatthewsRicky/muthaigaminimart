"use client";

import { motion, animate } from "framer-motion";
import ImageCard from "../components/ImageCards";
import Carousel from "./Carousel";
import Link from "next/link";

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
			<h1 className="flex justify-center items-center text-[#000080] mt-20 mx-10 text-lg md:text-3xl lg:6xl font-semibold">
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
						every customer`&apos;`s needs. With a friendly and inviting
						atmosphere, Muthatiga Mini Market is dedicated to providing
						exceptional customer service, ensuring a convenient and enjoyable
						shopping experience in the vibrant Diani Beach community.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row flex-wrap justify-center items-center my-20 gap-8">
				<motion.div
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<ImageCard
						imageSrc="/images/wines.jpeg"
						title="Alcoholic Bevereages"
						description="Fully stocked Liquor Store"
					/>
				</motion.div>
				<motion.div
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
				>
					<ImageCard
						imageSrc="/images/sodas.jpeg"
						title="Non-alcoholic Beverages"
						description="Soda And Juices"
					/>
				</motion.div>
				<motion.div
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.4 }}
				>
					<ImageCard
						imageSrc="/images/coffee.jpeg"
						title="Coffee"
						description="Coffee selection"
					/>
				</motion.div>
				<motion.div
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.6 }}
				>
					<ImageCard
						imageSrc="/images/insecticides.jpeg"
						title="Repellants and Insecticedes"
						description="Protect yourself and your Home."
					/>
				</motion.div>
			</div>
			<div className="flex justify-center overflow-hidden mx-0 flex-col shadow-xl lg:flex-row p-10 gap-10 m-[6rem] bg-blue-200/20">
				<div className="h-[50vh] lg:h-auto w-full">
					<Carousel />
				</div>

				<div className="flex flex-col text-lg font-semibold text-[#000080] justify-between relative items-center gap-6 my-20 w-full">
					<h1 className="font-bold flex justify-center items-center text-white bg-[#000080] w-full p-2">
						Useful Links
					</h1>
					<Link
						href="/contact"
						className="flex justify-center bg-white border-[#000080] border-2 w-full text-center faq"
					>
						<div>
							<div className=" p-4">Talk to Us</div>
						</div>
					</Link>
					<Link
						href="/whatsapporders"
						className="flex justify-center bg-white border-[#000080] border-2 w-full text-center faq"
					>
						<div>
							<div className=" p-4">Order on WhatsApp</div>
						</div>
					</Link>

					<Link
						href="/location"
						className="flex justify-center bg-white border-[#000080] border-2 w-full text-center faq"
					>
						<div>
							<div className=" p-4">Find Us</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StoreFeatureCard;
