import Image from "next/image";

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
			<div className="relative bg-center">
				<Image
					src={imageSrc}
					alt={title}
					className="w-full h-auto"
					width={200}
					height={200}
				/>
				<div className="absolute inset-0"></div>
			</div>
			<div className="px-6 py-4 hidden group-hover:flex flex-col">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-blue-800 text-base">{description}</p>
			</div>
		</div>
	);
};

export default ImageCard;
