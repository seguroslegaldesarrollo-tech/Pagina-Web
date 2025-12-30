import { Card, Image } from "@chakra-ui/react";
import "./BigCarouselItem.css";

interface BigCarouselItemProps {
  index: number;
  image: string;
}

function BigCarouselItem({ image }: BigCarouselItemProps) {
  return (
    <Card.Root className="card-container">
      <Image src={image} alt="Service Image" className="card-image" />
    </Card.Root>
  );
}

export default BigCarouselItem;
