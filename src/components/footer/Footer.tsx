import { GridItem, Grid, Text, Flex, Link, Box, Image } from "@chakra-ui/react";
/*
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
*/
import logo from "../../assets/logo.png";

interface Social {
  icon: string;
  name: string;
}

function Footer() {
  const socials: Social[] = [];
  /*
  const socials = [
    { icon: <SlSocialInstagram />, name: "Instagram" },
    { icon: <SlSocialTwitter />, name: "Twitter" },
    { icon: <SlSocialFacebook />, name: "Facebook" },
  ];*/

  return (
    <Grid
      bg="#050A30"
      color="#F4F4F4"
      fontSize="md"
      px={{ base: "6%", md: "4%" }}
      py={{ base: "3rem", md: "2rem" }}
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="2rem"
      textAlign={{ base: "center", md: "left" }}
    >
      {/* LOGO */}
      <GridItem>
        <Flex justify={{ base: "center", md: "flex-start" }}>
          <Image src={logo} alt="logo" objectFit="contain" maxW="160px" />
        </Flex>
      </GridItem>

      {/* SITES */}
      <GridItem>
        <Text fontWeight="bold" mb="1rem">
          Sites
        </Text>
        <Flex direction="column" gap="0.5rem">
          <Link href="/home" color="gray.400" _hover={{ color: "white" }}>
            Inicio
          </Link>
          <Link href="/about-us" color="gray.400" _hover={{ color: "white" }}>
            Conócenos
          </Link>
          <Link href="/contact" color="gray.400" _hover={{ color: "white" }}>
            Contáctanos
          </Link>
        </Flex>
      </GridItem>

      {/* SOCIAL */}
      <GridItem>
        <Text fontWeight="bold" mb="1rem">
          Contacto
        </Text>
        <Flex direction="column" gap="0.75rem">
          <Flex align="center" gap="0.75rem" color="gray.400">
            <Text>Cra 59 No. 45A - 40 Bogotá D.C</Text>
          </Flex>
          <Flex align="center" gap="0.75rem" color="gray.400">
            <Text>+57 315 3507645</Text>
          </Flex>
          <Flex align="center" gap="0.75rem" color="gray.400">
            <Text>comercialgenerales1@servisegurosmia.co</Text>
          </Flex>
          {socials && socials.map((social) => (
            <Link
              key={social.name}
              color="gray.400"
              _hover={{ color: "white" }}
            >
              <Flex align="center" gap="0.75rem">
                <Box fontSize="lg">{social.icon}</Box>
                <Text>{social.name}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </GridItem>

      {/* COPYRIGHT */}
      <GridItem
        display="flex"
        alignItems={{ base: "center", lg: "flex-end" }}
        justifyContent={{ base: "center", lg: "flex-end" }}
      >
        <Text fontSize="sm" color="gray.400">
          © 2025 — All rights reserved.
        </Text>
      </GridItem>
    </Grid>
  );
}

export default Footer;
