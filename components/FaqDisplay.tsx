"use client";

import { Image } from "@chakra-ui/next-js";
import { motion, scroll, animate } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

import Beer from "@/src/public/images/coffee.png";
import Bjuice from "@/src/public/images/smokables.png";
import Candy from "@/src/public/images/sodas.png";
import Sunscreen from "@/src/public/images/wines.png";

const FaqDisplay: React.FC = () => {
	//const [scrollYProgreess] = useScroll();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			className="flex flex-col lg:col-span-2 m-0 flex-wrap md:flex-row justify-center items-center gap-8 w-full mx-10"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Beer}
					alt="Beer and Wine"
					height={400}
					width={400}
					className="bg-center"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Bjuice}
					alt="Bottled Juice"
					height={400}
					width={400}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Candy}
					alt="Candy"
					height={400}
					width={400}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Sunscreen}
					alt="Sunscreen"
					height={400}
					width={400}
				/>
			</motion.div>
		</motion.div>
	);
};

export default FaqDisplay;
