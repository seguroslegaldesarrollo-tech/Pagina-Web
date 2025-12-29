import { Carousel, IconButton } from "@chakra-ui/react";
import BigCarouselItem from "./BigCarouselItem";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import carrusel1 from "../../assets/carrusel1.png";
import carrusel2 from "../../assets/carrusel2.png";
import carrusel3 from "../../assets/carrusel3.png";

function BigCarousel() {
  const items = [
    {
      image: carrusel1,
    },
    {
      image: carrusel2,
    },
    {
      image: carrusel3,
    },
  ];
  return (
    <Carousel.Root
      slideCount={items.length}
      slidesPerPage={1}
      className="carousel-container"
      mt={10}
      autoplay={{ delay: 3000 }}
    >
      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton
            size="xs"
            variant="outline"
            borderColor={"var(--primary-color)"}
          >
            <GrCaretPrevious />
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.ItemGroup>
          {items.map((item, index) => (
            <Carousel.Item index={index} key={index}>
              <BigCarouselItem
                index={index}
                image={item.image}
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton
            size="xs"
            variant="outline"
            borderColor={"var(--primary-color)"}
          >
            <GrCaretNext />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.Indicators />
    </Carousel.Root>
  );
}

export default BigCarousel;
