import { Container, Box } from "@chakra-ui/react";
import "./banner.css";

interface BannerProps {
  title: string;
  image: string;
  }

function Banner({ title, image }: BannerProps) {
  return (
    <Container
      maxW={"100%"}
      px={0}
      className="container-banner"
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box className="title-box">{title}</Box>
    </Container>
  );
}

export default Banner;
