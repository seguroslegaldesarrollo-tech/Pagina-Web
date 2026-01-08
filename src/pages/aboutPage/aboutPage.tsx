import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Icon
} from "@chakra-ui/react";
import { FaHandshake, FaCogs } from "react-icons/fa";
import aboutImage from "../../assets/about.png";
import logo from "../../assets/logo.png";

export default function AboutPage() {
  return (
    <Box bg="white" className="page-background">
      {/* HERO */}
      <Box w="100%" h={{ base: "220px", md: "400px" }}>
        <Image
          src={aboutImage}
          alt="Seguros y confianza"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      {/* QUIÉNES SOMOS */}
      <Container maxW="6xl" py={16}>
        <Heading
          textAlign="center"
          size="lg"
          mb={10}
          color="var(--primary-color)"
        >
          ¿QUIÉNES SOMOS?
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
          <Box>
            <Text mb={4}>
              Con más de 7 años en el mercado asegurador, en Serviseguros Legal
              de la mano con M&A, velamos por el bienestar y el amparo de las
              personas y sus patrimonios, ofreciendo una amplia variedad de
              propuestas competitivas, además de un exclento servicio al
              cliente.
            </Text>
          </Box>

          <Flex justify="center">
            <Image src={logo} alt="Seguros Legal" maxW="260px" rounded="md" />
          </Flex>
        </SimpleGrid>
      </Container>

      {/* NUESTRA LABOR */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <Heading
            textAlign="center"
            size="lg"
            mb={12}
            color="var(--primary-color)"
          >
            NUESTRA LABOR
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
            {/* CONFIANZA */}
            <Flex gap={6}>
              <Icon
                as={FaHandshake}
                boxSize={14}
                color="var(--secondary-color)"
              />
              <Box>
                <Text fontWeight="bold" color="var(--secondary-color)" mb={2}>
                  CONFIANZA
                </Text>
                <Text>
                  Gracias a nuestras alianzas con aseguradoras reconocidas a
                  nivel internacional, brindamos a los usuarios un abanico de
                  posibilidades para asegurar sus riesgos de la manera más
                  óptima.
                </Text>
              </Box>
            </Flex>

            {/* VIABILIDAD */}
            <Flex gap={6}>
              <Icon as={FaCogs} boxSize={14} color="var(--secondary-color)" />
              <Box>
                <Text fontWeight="bold" color="var(--secondary-color)" mb={2}>
                  VIABILIDAD
                </Text>
                <Text>
                  Ajustamos las condiciones de aseguramiento a sus necesidades.
                  Contamos con facilidades de pago por medio de financieras.
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
