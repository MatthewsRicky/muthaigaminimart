"use client";
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FaqDisplay: React.FC = () => {
	return (
		<div className="grid grid-cols-4 gap-2">
			<div>
				<Image
					src={"/public/images/Beerandwine.png"}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src={"bottled_juice.png"}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src={"candy.png"}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
			<div>
				<Image
					src={"sunscreen.png"}
					alt="some image"
					width={350}
					height={350}
				/>
			</div>
		</div>
	);
};

export default FaqDisplay;
