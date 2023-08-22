"use client";

import { Image } from "@chakra-ui/next-js";
import { motion, scroll } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

import Beer from "@/src/public/images/Beerandwine.png";
import Bjuice from "@/src/public/images/bottled_juice.png";
import Candy from "@/src/public/images/candy2.png";
import Sunscreen from "@/src/public/images/sunscreen.png";

const FaqDisplay: React.FC = () => {
	//const [scrollYProgreess] = useScroll();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="flex flex-col m-0 flex-wrap md:flex-row justify-center items-center gap-8 w-full mx-10"
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Beer}
					alt="Beer and Wine"
					height={300}
					width={300}
				/>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Bjuice}
					alt="Bottled Juice"
					height={300}
					width={300}
				/>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Candy}
					alt="Candy"
					height={300}
					width={300}
				/>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Sunscreen}
					alt="Sunscreen"
					height={300}
					width={300}
				/>
			</motion.div>
		</motion.div>
	);
};

export default FaqDisplay;
