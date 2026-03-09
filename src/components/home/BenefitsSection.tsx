import { Heading, Box, Text, Flex, Icon, SimpleGrid, Container } from "@chakra-ui/react";
import { FaChartLine, FaShieldAlt, FaCreditCard, FaHandshake, FaFileContract, FaHeadset } from "react-icons/fa";
import "./BenefitsSection.css";

function BenefitsSection() {
  const benefits = [
    {
      icon: FaChartLine,
      title: "Comparación nacional entre aseguradoras",
      description: "Comparamos varias opciones y buscamos la mejor relación cobertura–precio.",
      color: "#3182ce"
    },
    {
      icon: FaShieldAlt,
      title: "Mejor cobertura según tu perfil",
      description: "Te asesoramos para elegir Todo Riesgo o RC con coberturas claras y útiles.",
      color: "#38a169"
    },
    {
      icon: FaCreditCard,
      title: "Financiación del 100% de tu póliza",
      description: "Opciones de pago sin estudio previo para que asegures tu vehículo sin frenar tu flujo.",
      color: "#805ad5"
    },
    {
      icon: FaHandshake,
      title: "Acompañamiento de principio a fin",
      description: "Te guiamos desde la cotización hasta la emisión de tu poliza.",
      color: "#dd6b20"
    },
    {
      icon: FaFileContract,
      title: "Gestión y radicación de endosos",
      description: "Tramitamos endosos por ti para vehiculos con prenda.",
      color: "#d53f8c"
    },
    {
      icon: FaHeadset,
      title: "Soporte y orientación en siniestros",
      description: "Te acompañamos con el paso a paso y requisitos cuando necesites usar tu póliza.",
      color: "#2d3748"
    }
  ];

  return (
    <Box className="benefits-section">
      <Container maxW="6xl" py={16}>
        <Heading 
          size="3xl" 
          textAlign="center" 
          mb={4}
          className="benefits-title"
        >
          Beneficios Exclusivos
        </Heading>
        <Text 
          textAlign="center" 
          mb={16}
          fontSize="xl"
          className="benefits-subtitle"
        >
          Te ofrecemos más que seguros, te brindamos tranquilidad
        </Text>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          gap={8}
          className="benefits-grid"
        >
          {benefits.map((benefit, index) => (
            <Box 
              key={index}
              className="benefit-card"
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.3s ease"
              position="relative"
              overflow="hidden"
            >
              <Box 
                className="benefit-card-decoration"
                bg="var(--primary-color)"
                opacity="0.1"
                position="absolute"
                top="0"
                right="0"
                w="100px"
                h="100px"
                borderRadius="0 0 0 100%"
              />
              
              <Flex 
                direction="column" 
                h="100%"
                position="relative"
                zIndex={1}
              >
                <Flex 
                  align="center" 
                  mb={4}
                  className="benefit-icon-container"
                >
                  <Box 
                    className="benefit-icon-bg"
                    bg="var(--primary-color)"
                    p={3}
                    borderRadius="full"
                    mr={3}
                  >
                    <Icon 
                      as={benefit.icon} 
                      boxSize={6} 
                      color="white"
                    />
                  </Box>
                </Flex>

                <Heading 
                  size="md" 
                  mb={3}
                  className="benefit-title"
                  color="var(--primary-color)"
                >
                  {benefit.title}
                </Heading>

                <Text 
                  className="benefit-description"
                  color="var(--secondary-color)"
                  lineHeight="1.6"
                >
                  {benefit.description}
                </Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default BenefitsSection;
