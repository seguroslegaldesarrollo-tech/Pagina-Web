import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Input,
  Textarea,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import {
  /*
  FaFacebookF,
  FaInstagram,
  */
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import contactImage from "../../assets/contact-image.png";
import ContactMap from "../../components/contactMap/ContactMap";

export default function ContactPage() {
  return (
    <Box bg="white" className="page-background">
      {/* HERO */}
      <Box w="100%" h={{ base: "200px", md: "400px" }}>
        <Image
          src={contactImage}
          alt="Atención al cliente"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      {/* CONTENIDO */}
      <Container maxW="6xl" py={12}>
        {/* TÍTULO */}
        <Stack gap={4} mb={10}>
          <Heading size="lg">Líneas de atención</Heading>
          <Text>
            Si tienes preguntas sobre nuestros seguros, no dudes en
            contactarnos. Aquí podrás encontrar las líneas de servicio al
            cliente disponibles, los horarios de atención y nuestras redes
            sociales.
          </Text>
          <Text fontWeight="semibold">
            ¡Estamos aquí para ayudarte en todo lo que necesites!
          </Text>
        </Stack>

        {/* INFO CONTACTO */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mb={10}>
          {/*
          <Stack gap={2}>
            <Text fontWeight="bold" color="var(--primary-color)">
              Encuéntranos en
            </Text>
            <Flex gap={4}>
              <Icon as={FaFacebookF} boxSize={6} />
              <Icon as={FaInstagram} boxSize={6} />
            </Flex>
          </Stack>
          */}

          <Stack gap={2}>
            <Text fontWeight="bold" color="var(--primary-color)">
              Estamos ubicados en
            </Text>
            <Flex gap={3} align="center">
              <Icon as={FaMapMarkerAlt} />
              <Text>Cra 59 No. 45A - 40 Bogotá D.C</Text>
            </Flex>
          </Stack>

          <Stack gap={2}>
            <Text fontWeight="bold" color="var(--primary-color)">
              Llámanos al
            </Text>
            <Flex gap={3} align="center">
              <Icon as={FaPhoneAlt} />
              <Text>+57 315 3507645</Text>
            </Flex>
          </Stack>
        </SimpleGrid>

        {/* CORREO */}
        <Flex gap={3} align="center" mb={8}>
          <Icon as={FaEnvelope} boxSize={6} />
          <Text>comercialgenerales1@servisegurosmia.co</Text>
        </Flex>

        {/* MAPA DE GOOGLE MAPS */}
        <ContactMap height="400px" />

        {/* FORMULARIO */}
        <Box maxW="3xl">
          <Text mb={6}>
            Tu opinión cuenta para nosotros. Si tienes alguna inquietud, háznolo
            saber
          </Text>

          <chakra.form
            as="form"
            action="https://formspree.io/f/mojqkwoo"
            method="POST"
          >
            <Stack gap={4}>
              <Input
                name="nombre"
                placeholder="Nombre completo"
                borderRadius="full"
              />

              <Input
                name="telefono"
                placeholder="Teléfono móvil/celular"
                borderRadius="full"
              />

              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                borderRadius="full"
              />

              <Input name="asunto" placeholder="Asunto" borderRadius="full" />

              <Textarea
                name="mensaje"
                placeholder="Mensaje"
                borderRadius="xl"
                rows={5}
              />

              <Button
                type="submit"
                size="lg"
                alignSelf="flex-start"
                px={10}
              >
                Enviar
              </Button>
            </Stack>
          </chakra.form>
        </Box>
      </Container>
    </Box>
  );
}
