import { Heading, Carousel, IconButton, Box } from "@chakra-ui/react";
import "./AlliesSection.css";
import segurosMundial from "../../assets/seguros-mundial.png";
import mapfre from "../../assets/mapfre.png";
import sura from "../../assets/sura.png";
import seguros from "../../assets/seguros-del-estado.png";
import hdi from "../../assets/HDI-SEGUROS.png";
import previsora from "../../assets/previsora.png";
import bolivar from "../../assets/bolivar.png";
import axa from "../../assets/axa-colpatria.png";
import solidaria from "../../assets/solidaria.png";
import equidad from "../../assets/equidad.png";
import allianz from "../../assets/allianz.png";
import qualitas from "../../assets/qualitas.png";
import { useEffect, useState } from "react";

function AlliesSection() {
  const allies = [
    segurosMundial,
    mapfre,
    sura,
    seguros,
    hdi,
    previsora,
    equidad,
    solidaria,
    axa,
    bolivar,
    allianz,
    qualitas,
  ];

  const [slides, setSlides] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 480) setSlides(3);
      else if (width < 768) setSlides(3);
      else if (width < 1024) setSlides(4);
      else setSlides(4);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <>
      <Heading size="3xl" className="allies-title">
        Aseguradoras Aliadas
      </Heading>
      <Carousel.Root
        slideCount={allies.length}
        slidesPerPage={slides}
        className="allies-carousel-container"
        autoplay={{ delay: 3000 }}
      >
        <Carousel.ItemGroup>
          {allies.map((ally, index) => (
            <Carousel.Item index={index} key={index}>
              <Box className="ally-image-container">
                <img src={ally} alt={`Aseguradora aliada ${index + 1}`} className="ally-image" />
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
        <Carousel.Control justifyContent="center" gap="4">
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="ghost">
              {"<"}
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.Indicators />

          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="ghost">
              {">"}
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </>
  );
}

export default AlliesSection;