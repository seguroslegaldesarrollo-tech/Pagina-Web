import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaHandshake, FaCogs } from "react-icons/fa";
import aboutImage from "../../assets/about.png";
import logo from "../../assets/slogan.png";

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
            <Text mb={4} textAlign="justify">
              Seguros Legal es una agencia de seguros que integra protección y
              respaldo jurídico en un modelo de servicio orientado a proteger la
              vida, el patrimonio y los proyectos de sus clientes. Nos
              diferenciamos por un acompañamiento cercano y permanente:
              asesoramos antes de asegurar, orientamos durante todo el proceso y
              respaldamos cada eventualidad hasta su resolución, representando
              los intereses de nuestros clientes con firmeza, claridad y
              responsabilidad. Nuestra cultura organizacional FIRME orienta cada
              decisión y fortalece nuestras relaciones con clientes, aliados y
              equipo de trabajo, consolidando un servicio basado en liderazgo,
              compromiso y excelencia. Más que intermediar seguros, construimos
              relaciones de confianza a largo plazo.
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
            {/* MISIÓN */}
            <Flex gap={6}>
              <Icon
                as={FaHandshake}
                boxSize={14}
                color="var(--secondary-color)"
              />
              <Box>
                <Text fontWeight="bold" color="var(--secondary-color)" mb={2}>
                  MISIÓN
                </Text>
                <Text textAlign="justify">
                  En Seguros Legal protegemos la vida, el patrimonio y los
                  proyectos de nuestros clientes mediante soluciones integrales
                  en seguros, con acompañamiento cercano y respaldo jurídico
                  especializado, guiados por nuestra cultura organizacional
                  FIRME, esencia de nuestro liderazgo y servicio.
                </Text>
              </Box>
            </Flex>

            {/* VISIÓN */}
            <Flex gap={6}>
              <Icon as={FaCogs} boxSize={14} color="var(--secondary-color)" />
              <Box>
                <Text fontWeight="bold" color="var(--secondary-color)" mb={2}>
                  VISIÓN
                </Text>
                <Text textAlign="justify">
                  Para el año 2030, consolidarnos como una agencia de seguros
                  líder a nivel nacional, con capacidad de expansión hacia
                  nuevos mercados, reconocida por su excelencia, cercanía y
                  respaldo jurídico diferencial, protegiendo a familias y
                  empresas mediante un modelo de servicio humano, sólido y
                  confiable.
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
