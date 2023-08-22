"use client";

import { Image } from "@chakra-ui/next-js";
import { motion } from "framer-motion";

import Beer from "@/src/public/images/Beerandwine.png";
import Bjuice from "@/src/public/images/bottled_juice.png";
import Candy from "@/src/public/images/candy2.png";
import Sunscreen from "@/src/public/images/sunscreen.png";
import { Box, Center } from "@chakra-ui/react";

const FaqDisplay: React.FC = () => {
	return (
		<div className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 h-96 gap-4 w-full mx-10">
			<Box className="flex justify-center items-center">
				<Image
					src={Beer}
					alt="Beer and Wine"
					width={300}
					height={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Bjuice}
					alt="Bottled Juice"
					width={300}
					height={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Candy}
					alt="Candy"
					width={300}
					height={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Sunscreen}
					alt="Sunscreen"
					width={300}
					height={300}
				/>
			</Box>
		</div>
	);
};

export default FaqDisplay;
