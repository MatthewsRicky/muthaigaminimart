"use client";

import { Image } from "@chakra-ui/next-js";
import { motion } from "framer-motion";

import Beer from "@/src/public/images/Beerandwine.png";
import Bjuice from "@/src/public/images/bottled_juice.png";
import Candy from "@/src/public/images/candy2.png";
import Sunscreen from "@/src/public/images/sunscreen.png";

const FaqDisplay: React.FC = () => {
	return (
		<div className="grid grid-cols-4 h-96 gap-2">
			<div>
				<Image
					src={Beer}
					alt="Beer and Wine"
				/>
			</div>
			<div>
				<Image
					src={Bjuice}
					alt="Bottled Juice"
				/>
			</div>
			<div>
				<Image
					src={Candy}
					alt="Candy"
				/>
			</div>
			<div>
				<Image
					src={Sunscreen}
					alt="Sunscreen"
				/>
			</div>
		</div>
	);
};

export default FaqDisplay;
