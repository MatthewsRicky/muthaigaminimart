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
		<div className="flex flex-col m-0 flex-wrap md:flex-row justify-center items-center gap-8 w-full mx-10">
			<Box className="flex justify-center items-center">
				<Image
					src={Beer}
					alt="Beer and Wine"
					height={300}
					width={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Bjuice}
					alt="Bottled Juice"
					height={300}
					width={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Candy}
					alt="Candy"
					height={300}
					width={300}
				/>
			</Box>
			<Box className="flex justify-center items-center">
				<Image
					src={Sunscreen}
					alt="Sunscreen"
					height={300}
					width={300}
				/>
			</Box>
		</div>
	);
};

export default FaqDisplay;
