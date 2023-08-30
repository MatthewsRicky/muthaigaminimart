import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
	imageSrc,
	title,
	description,
}) => {
	return (
		<div className="max-w-sm p-4 m-2 group rounded overflow-hidden shadow-lg transition-scale duration-300">
			<div className="image_card relative">
				<Image
					src={imageSrc}
					alt={title}
					className="w-full"
					width={300}
					height={300}
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileHover={{ opacity: 1, scale: 1 }}
					className="absolute flex justify-center items-center inset-0"
				>
					<div className="filter px-6 py-4 bg-[#000080]/40 hidden group-hover:flex w-full flex-col">
						<div className="text-white font-bold text-3xl mb-2">{title}</div>
						<p className="text-white font-bold text-base">{description}</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ImageCard;
