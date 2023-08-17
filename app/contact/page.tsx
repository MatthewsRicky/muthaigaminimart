"use client";

import ContactDetails from "@/src/components/ContactDetails";
import ContactApp from "@/src/components/ContactApp";

import { motion, animate } from "framer-motion";
import Image from "next/image";

import Logo from "@/src/public/images/g1.png"

const Contact = () => {
	return (
		<div>
			<div className="hero w-full md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="mt-[4rem] flex flex-col absolute top-[30%] left-[12%] sm:left-[16%] md:left-[24%] sm:top-20 md:top-16 p-8 rounded-lg mx-auto text-center gap-8 text-[#fff] bg-[#000080]/40 mix-blend-hard-light"
				>
					<div className="flex gap-8 justify-center items-center">
						<Image
							src={Logo}
							alt="Logo"
							width={100}
							height={100}
						/>
						<motion.h1
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
						className="text-3xl  md:text-4xl lg:text-5xl font-bold"
					>
						CONTACT
					</motion.h1>
					</div>
					
				</motion.div>
			</div>
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>Muthaiga mini Market <i>></i> Contact</motion.h1>
			</div>
			<div className="flex w-full justify-center items-center m-10">
				<ContactDetails />
			</div>
			{/*<ContactApp
				name={"Muthaiga Mini Market"}
				phone={"0704 580 875"}
				address={"Diani"}
	/>*/}
		</div>
	);
};

export default Contact;
