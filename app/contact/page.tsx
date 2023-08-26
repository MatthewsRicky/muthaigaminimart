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
					className="mt-[4rem] flex flex-col justify-center items-center h-full bg-black/30 p-4 mx-auto text-center gap-6 text-[#000080]"
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
						className="text-xl text-white p-5 md:-p-[3.5] md:text-3xl lg:text-4xl font-bold"
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
			<div className="flex [85%] justify-center items-center m-12 mx-auto">
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
