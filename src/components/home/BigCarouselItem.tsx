import { Card, Image } from "@chakra-ui/react";
import "./BigCarouselItem.css";

interface BigCarouselItemProps {
  index: number;
  image: string;
  title: string;
  description: string;
}

function BigCarouselItem({ image, title, description }: BigCarouselItemProps) {
  return (
    <Card.Root className="card-container" gap={4}>
      <Image src={image} alt="Service Image" className="card-image" />
      <Card.Body>
        <Card.Title fontSize={"2rem"} color={"var(--primary-color)"} mb={10}>
          {title}
        </Card.Title>
        <Card.Description fontSize={"1.5rem"} color={"var(--secondary-color)"}>
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default BigCarouselItem;
