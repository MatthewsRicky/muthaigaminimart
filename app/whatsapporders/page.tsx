"use client";

import Image from "next/image";
import { motion, animate } from "framer-motion";

import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappOrders = () => {
	return (
		<div className="w-full my-[5rem] md:my-0 group relative">
			<div className="hero">
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
						WHATSAPP ORDERS
					</motion.h1>
					<motion.p
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
						className="text-3xl md:text-4xl lg:text-3xl font-semibold"
					>
						Enjoy Shopping From Home
					</motion.p>
				</motion.div>
			</div>
			<div>
				<p className="text-lg font-semibold md:text2xl">
					You can now order your groceries, household items, electronics and
					other supermarket shopping via WhatsApp. The process is quite simple:
				</p>
				<ul className="py-4">
					<li>
						<p className="text-lg font-semibold md:text2xl">
							Send your shopping list to the WhatsApp number below. Include the
							item description and quantity.
						</p>
						<div className="p-4 m-6 flex justify-around gap-10 items-center hover:scale-105 font-bold">
							<FaWhatsappSquare className="w-32 h-32 md:w-20 md:h-20 text-green-600/95 " />
							<h1 className="text-2xl md:text-3xl">
								WhatsApp Number : +254 720 000 000
							</h1>
						</div>
					</li>
					<li>
						<p className="text-lg font-semibold md:text2xl">
							Specify your full names and exact location ( area, road/ street,
							estate, house/apt number).
						</p>
					</li>
					<li>
						<p className="text-lg font-semibold md:text2xl">
							We will do the picking, packing and you can choose to either
							collect or we deliver to you via Cab / Boda boda.
						</p>
					</li>
					<li>
						<p className="text-lg font-semibold md:text2xl">
							Delivery fees for a 0-15km ksh 50, 11-15kms ksh 380.
						</p>
					</li>
				</ul>

				<h3 className="font-bold text-xl w-fit text-blue-950 bg-white/20 rounded-md p-4">
					Terms and Conditions:
				</h3>
				<ul>
					<li>
						<p className="text-lg font-semibold md:text2xl">
							All payments including delivery fees should be paid to Chandarana
							Foodplus ONLY via MPESA. Kindly confirm your final bill before
							payment as there are no refunds
						</p>
					</li>
					<li>
						<p className="text-lg font-semibold md:text2xl">
							Delivery is one way, for any returns kindly visit the branch for a
							credit note which is redeemable at that branch and cannot be used
							to place another WhatsApp order.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default WhatsappOrders;
