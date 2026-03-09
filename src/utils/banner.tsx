import { Container, Box, Heading, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import "./banner.css";

interface BannerProps {
  image: string;
}

function Banner({ image }: BannerProps) {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/7UWREMKJXKSHE1", "_blank");
  };

  return (
    <Container
      maxW={"100%"}
      px={0}
      className="container-banner"
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box className="banner-overlay">
        <VStack className="banner-content" gap={6} align="flex-start">
          <Box>
            <Heading className="banner-title" size="2xl">
              Protege lo que más importa
            </Heading>
            <Text className="banner-subtitle" fontSize="xl">
              Seguros con respaldo jurídico que te dan tranquilidad real
            </Text>
          </Box>
          
          <VStack className="banner-features" gap={3} align="flex-start">
            <HStack className="banner-feature">
              <Icon as={FaCheckCircle} className="feature-icon" />
              <Text className="feature-text">Cobertura completa para tu tranquilidad</Text>
            </HStack>
            <HStack className="banner-feature">
              <Icon as={FaShieldAlt} className="feature-icon" />
              <Text className="feature-text">Asesoría legal incluida en todo momento</Text>
            </HStack>
            <HStack className="banner-feature">
              <Icon as={FaPhoneAlt} className="feature-icon" />
              <Text className="feature-text">Múltiples canales de atención y soporte</Text>
            </HStack>
          </VStack>

          <Button className="banner-cta" size="lg" onClick={handleWhatsAppClick} aria-label="Cotizar seguros por WhatsApp">
            Cotiza con nosotros <Icon as={FaArrowRight} ml={2} />
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default Banner;
