"use client";

import { Image } from "@chakra-ui/next-js";
import { motion } from "framer-motion";

import Beer from "@/src/public/images/Beerandwine.png";
import Bjuice from "@/src/public/images/bottled_juice.png";
import Beer from "@/src/public/images/Beerandwine.png";
import Beer from "@/src/public/images/Beerandwine.png";

const FaqDisplay: React.FC = () => {
	return (
		<div className="grid grid-cols-4 h-96 gap-2">
			<div>
				<Image
					src={Beer}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src={Bjuice}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src={"/public/imaages/candy.png"}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src="/public/imaages/sunscreen.png"
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
		</div>
	);
};

export default FaqDisplay;
