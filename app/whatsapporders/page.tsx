"use client";

import Image from "next/image";
import { motion, animate } from "framer-motion";
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappOrders = () => {
	return (
		<div className="w-full">
			<div className="whatsapp w-full md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="flex flex-col justify-center items-center h-full bg-black/30 p-4 mx-auto text-center gap-6 text-[#000080]"
				>
					<div className="flex gap-4 justify-center  bg-white p-4 items-center">
						<Image
							src="/images/Logo 3.svg"
							alt="Logo"
							width={100}
							height={100}
						/>
						<div className="flex  flex-col">
							<motion.h1
								initial={{ x: -300 }} // Initial x position (off the screen to the left)
								animate={{ x: 0 }} // Final x position (centered on the screen)
								transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
								className="text-xl text-[#000080] md:text-2xl lg:text-3xl font-bold"
							>
								WHATSAPP ORDERS
							</motion.h1>
							<motion.p
								initial={{ x: -300 }} // Initial x position (off the screen to the left)
								animate={{ x: 0 }} // Final x position (centered on the screen)
								transition={{ duration: 1.4, ease: "easeOut" }} // Animation duration
								className="text-md text-[#000080] md:px-[3.5] md:text-lg lg:text-xl font-bold"
							>
								Enjoy Shopping From Home
							</motion.p>
						</div>
					</div>
				</motion.div>
			</div>
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market <i>{">"}</i> Whatsapp Orders
				</motion.h1>
			</div>
			<div className="flex flex-wrap justify-center items-center text-center gap-10  text-blue-950 p-8 m-8 drop-shadow-xl  bg-blue-200/40 rounded-xl">
				<p className="text-md text-justify mx-10 font-semibold md:text2xl">
					You can now order your household items, electronics and other
					supermarket shopping via WhatsApp. For Groceries(vegetables and fruit)
					we are happy to shop from our Neighbor Nancy at no extra cost. The
					process is quite simple:
				</p>
				<ul className="flex flex-col text-justify">
					<li className="flex flex-col mx-10">
						<p className="text-md mx-10 md:text-md font-semibold md:text2xl">
							Send your shopping list to the WhatsApp number below. Include the
							item description and quantity.
						</p>
						<div className="p-4 m-6 flex justify-around gap-10 items-center hover:scale-105 font-bold">
							<FaWhatsappSquare className="w-32 h-32 md:w-20 md:h-20 text-green-600/95 " />
							<h1 className="text-2xl md:text-3xl">
								WhatsApp Number : +254 775 889988
							</h1>
						</div>
					</li>
					<li className="flex flex-col mx-10">
						<p className="text-md mx-10 md:text-md font-semibold md:text2xl">
							Specify your full names and exact location ( area, road/ street,
							estate, house/apt number).
						</p>
					</li>
					<li className="flex flex-col mx-10">
						<p className="text-md mx-10 md:text-md font-semibold md:text2xl">
							We will do the picking, packing and you can choose to either
							collect or we deliver to you via Cab / Boda boda.
						</p>
					</li>
					<li className="flex flex-col mx-10">
						<p className="text-md mx-10 md:text-md font-semibold md:text2xl">
							Delivery fees for a 0-15km ksh 50, 11-15kms ksh 380.
						</p>
					</li>
				</ul>
				<div className="flex flex-col gap-4 text-justify justify-center items-center">
					<h3 className="font-bold text-xl w-fit text-white bg-[#ff2800]/70 rounded-xs p-4">
						Terms and Conditions:
					</h3>
					<ul className="flex flex-col gap-3">
						<li>
							<p className="text-md mx-10 font-semibold md:text2xl">
								All payments including delivery fees should be paid to Muthaiga
								Mini Market LTD ONLY via MPESA. Kindly confirm your final bill
								before payment as there are no refunds.
							</p>
						</li>
						<li>
							<p className="text-md mx-10 font-normal md:text2xl">
								Delivery is one way, for any returns kindly visit the branch for
								a credit note which is redeemable at that branch and cannot be
								used to place another WhatsApp order.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WhatsappOrders;
