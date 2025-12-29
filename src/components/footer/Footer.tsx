import { GridItem, Grid, Text, Flex, Link, Box, Image } from "@chakra-ui/react";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";

import logo from "../../assets/logo.png";

function Footer() {
  const socials = [
    { icon: <SlSocialInstagram />, name: "Instagram" },
    { icon: <SlSocialTwitter />, name: "Twitter" },
    { icon: <SlSocialFacebook />, name: "Facebook" },
  ];
  return (
    <Grid
      fontSize="xl"
      backgroundColor={"#050A30"}
      justifyContent="center"
      color={"#F4F4F4"}
      templateColumns="repeat(4, 1fr)"
      paddingX="4%"
      py="2%"
    >
      <GridItem>
        <Image src={logo} alt="logo" objectFit="contain" width={"40%"} />
      </GridItem>
      <GridItem>
        <Text as="b" mb="6%">
          Sites
        </Text>
        <Flex ml="1%" flexDirection="column">
          <Link
            color="gray"
            _hover={{
              color: "white",
            }}
            href="/home"
          >
            Inicio
          </Link>
          <Link
            color="gray"
            _hover={{
              color: "white",
            }}
            href="/about-us"
          >
            Conócenos
          </Link>
          <Link
            color="gray"
            _hover={{
              color: "white",
            }}
            href="/contact"
          >
            Contactanos
          </Link>
        </Flex>
      </GridItem>
      <GridItem>
        <Text as="b">Social</Text>
        {socials.map((social) => (
          <Flex marginY="2%" key={social.name}>
            <Link
              color="gray"
              _hover={{
                color: "white",
              }}
            >
              <Flex>
                <Box>{social.icon}</Box>
                <Box marginLeft="15%">{social.name}</Box>
              </Flex>
            </Link>
          </Flex>
        ))}
      </GridItem>
      <GridItem alignSelf={"end"}>
        <Text>© 2025 — All rights reserved.</Text>
      </GridItem>
    </Grid>
  );
}

export default Footer;
