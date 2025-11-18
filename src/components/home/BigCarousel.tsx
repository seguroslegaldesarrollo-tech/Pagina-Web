import { Carousel, IconButton } from "@chakra-ui/react";
import BigCarouselItem from "./BigCarouselItem";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import logo from "../../assets/social.png";

function BigCarousel() {
  const items = [
    {
      image: logo,
      title: "EXPERIENCIA Y ALCANCE",
      description:
        "Conocemos los procesos de radicación y nos hacemos cargo de ellos. Contamos con un equipo capacitado en ataención de siniestros",
    },
    {
      image: logo,
      title: "ATENCIÓN 24/7",
      description: " Línea de atención las 24 horas para asistencias",
    },
    {
      image: logo,
      title: " VERACIDAD Y PROFESIONALISMO",
      description:
        " Ejecutivos expertos en venta consultiva.  Asesorías jurídicas con abogados especialistas",
    },
  ];
  return (
    <Carousel.Root
      slideCount={items.length}
      slidesPerPage={1}
      className="carousel-container"
      mt={10}
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
                title={item.title}
                description={item.description}
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
