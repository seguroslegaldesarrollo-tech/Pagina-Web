import { Carousel, IconButton, Box } from "@chakra-ui/react";
import BigCarouselItem from "./BigCarouselItem";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import carrusel1 from "../../assets/carrusel1.png";
import carrusel2 from "../../assets/carrusel2.png";
import carrusel3 from "../../assets/carrusel3.png";

import "./BigCarousel.css";

function BigCarousel() {
  const items = [
    { image: carrusel1 },
    { image: carrusel2 },
    { image: carrusel3 },
  ];

  return (
    <Box className="carousel-wrapper">
      <Carousel.Root
        slideCount={items.length}
        slidesPerPage={1}
        className="carousel-container"
        autoplay={{ delay: 3000 }}
      >
        {/* SLIDES */}
        <Carousel.ItemGroup>
          {items.map((item, index) => (
            <Carousel.Item index={index} key={index}>
              <BigCarouselItem image={item.image} index={index} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        {/* CONTROLES */}
        <Carousel.PrevTrigger asChild>
          <IconButton
            aria-label="Anterior"
            className="carousel-prev"
            variant="plain"
          >
            <GrCaretPrevious size={20} />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.NextTrigger asChild>
          <IconButton
            aria-label="Siguiente"
            className="carousel-next"
            variant="plain"
          >
            <GrCaretNext size={20} />
          </IconButton>
        </Carousel.NextTrigger>

        <Carousel.Indicators />
      </Carousel.Root>
    </Box>
  );
}

export default BigCarousel;
