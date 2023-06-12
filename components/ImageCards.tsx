import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-scale duration-300 hover:scale-105">
      <div className="relative">
        <Image 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto" 
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-blue-800 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;