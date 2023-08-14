"use client";

import ContactDetails from "@/src/components/ContactDetails";

import { motion, animate } from "framer-motion";

const Contact = () => {
	return (
		<div>
			<div className="hero w-full my-[5rem] md:my-0 group relative">
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
						CONTACT
					</motion.h1>
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
		</div>
	);
};

export default Contact;
