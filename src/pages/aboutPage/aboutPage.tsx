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
              En SEGUROS LEGAL brindamos soluciones integrales en seguros con
              respaldo jurídico especializado, enfocadas en proteger el
              patrimonio, la vida y los proyectos de quienes depositan su
              confianza en nosotros. Nos distinguimos por un modelo de
              acompañamiento cercano y permanente: asesoramos antes de asegurar,
              orientamos durante todo el proceso y respaldamos cada eventualidad
              hasta su resolución. Nuestros clientes no enfrentan solos trámites
              ni reclamaciones; cuentan con un equipo que representa sus
              intereses con firmeza, claridad y responsabilidad. Nuestra cultura
              FIRME (Fe, Integridad, Resultados con Responsabilidad, Mejora
              continua y Empatía) guía cada decisión y fortalece nuestras
              relaciones con clientes, aliados y equipo de trabajo. Creemos en
              un servicio humano, profesional y confiable, donde cada persona es
              atendida como parte de una familia respaldada y protegida. Más que
              intermediar seguros, construimos confianza.
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
                  En SEGUROS LEGAL protegemos el patrimonio, la vida y los
                  proyectos de nuestros clientes a través de soluciones
                  integrales en seguros con respaldo jurídico especializado.
                  Acompañamos a cada persona durante todo el proceso (desde la
                  asesoría inicial hasta la gestión y cierre de cualquier
                  eventualidad) brindando orientación clara, representación
                  firme y un servicio que simplifica cada trámite y optimiza los
                  tiempos de respuesta. Nuestra cultura FIRME es el fundamento
                  que sostiene nuestra manera de servir: Fe en Dios como guía y
                  dirección de nuestras decisiones, Integridad en cada
                  actuación, Resultados con responsabilidad, Mejora continua en
                  cada detalle de nuestro servicio y Empatía genuina hacia
                  quienes confían en nosotros. Más que asegurar, cuidamos
                  personas, construyendo relaciones basadas en confianza,
                  respaldo y tranquilidad.
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
                  Para el año 2036, consolidarnos para el como una agencia de
                  seguros altamente reconocida a nivel nacional por su
                  excelencia, cercanía y respaldo jurídico diferencial,
                  posicionándonos como una marca sólida, humana y confiable
                  dentro del sector asegurador. Expandir nuestra presencia hacia
                  nuevos mercados internacionales, llevando nuestro modelo de
                  acompañamiento integral y nuestra filosofía de servicio
                  centrada en valores a más familias y empresas. Ser
                  identificados como una organización diferente: íntegra,
                  cercana y confiable, que responde con solvencia y hace sentir
                  a cada cliente como parte de una familia respaldada y
                  protegida.
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
