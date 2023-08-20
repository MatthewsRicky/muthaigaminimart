import React from "react";
import { motion, animate } from "framer-motion";
interface NavigationCardProps{
	
	title: string
}

const NavigationCard: React.FC<NavigationCardProps> = (
	title
) => {
	return (
		<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
				initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
		>Muthaiga mini Market <i>></i> {title}</motion.h1>
		</div>
	);
};

export default NavigationCard;
