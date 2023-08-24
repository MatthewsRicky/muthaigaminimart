"use client";

import { Image } from "@chakra-ui/next-js";
import { motion, scroll, animate } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

import Water from "@/src/public/images/water.png";
import Smokables from "@/src/public/images/smokables.png";
import Sodas from "@/src/public/images/sodas.png";
import Wines from "@/src/public/images/wines.png";

const FaqDisplay: React.FC = () => {
	//const [scrollYProgreess] = useScroll();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			className="flex flex-col my-16 flex-wrap md:flex-row justify-center items-center gap-8 w-full mx-10"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				className="flex justify-center items-center"
			>
				<Image
					src={Water}
					alt="water"
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
					src={Smokables}
					alt="Tobacco Products"
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
					src={Sodas}
					alt="Beverages"
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
					src={Wines}
					alt="wines"
					height={400}
					width={400}
				/>
			</motion.div>
		</motion.div>
	);
};

export default FaqDisplay;
