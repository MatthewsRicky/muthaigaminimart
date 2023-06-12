import Carousel from "./Carousel"

const ImageData: React.FC = () => {

  const images = [
    '/images/bananas.jpeg',
    '/images/beverages.jpeg',
    '/images/cheese.jpeg',
    '/images/mmm1.jpeg',
    '/images/mmm2.jpeg'
  ];

  const captions = [
    'Bananas',
    'Beverages',
    'Cheese',
    'Mini-Mart',
    'Variety'
  ];

  return (
    <Carousel images={images} captions={captions} />
  )
}

export default ImageData