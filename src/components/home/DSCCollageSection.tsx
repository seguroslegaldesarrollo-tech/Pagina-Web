import { Box, Heading, Container } from "@chakra-ui/react";
import "./DSCCollageSection.css";

// Importar las imágenes DSC con nombres limpios
import dsc2 from "../../assets/DSC01457.png";
import dsc1 from "../../assets/DSC01432.png";
import dsc6 from "../../assets/DSC01441.png";
import dsc7 from "../../assets/DSC01487.png";
import dsc5 from "../../assets/DSC01492.png";
import dsc3 from "../../assets/DSC01380.png";
import dsc4 from "../../assets/DSC01402.png";

function DSCCollageSection() {
  const images = [
    { src: dsc3, alt: "Imagen profesional 3", className: "collage-img-main" },
    { src: dsc2, alt: "Imagen profesional 2", className: "collage-img-small" },
    { src: dsc5, alt: "Imagen profesional 5", className: "collage-img-small" },
    { src: dsc4, alt: "Imagen profesional 4", className: "collage-img-small" },
    { src: dsc1, alt: "Imagen profesional 1", className: "collage-img-small" },
    { src: dsc6, alt: "Imagen profesional 6", className: "collage-img-small" },
    { src: dsc7, alt: "Imagen profesional 7", className: "collage-img-small" },
  ];

  return (
    <Box className="dsc-collage-wrapper">
      <Container maxW="6xl" py={16}>
        <Heading size="3xl" textAlign="center" mb={12} className="collage-title">
          Nuestro Compromiso
        </Heading>
        
        <Box className="collage-grid">
          {images.map((image, index) => (
            <Box key={index} className="collage-item">
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`collage-image ${image.className}`}
                />
                <div className="image-overlay"></div>
              </div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default DSCCollageSection;
