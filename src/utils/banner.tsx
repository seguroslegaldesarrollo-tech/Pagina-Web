import { Container, Box } from "@chakra-ui/react";
import "./banner.css";

interface BannerProps {
  title: string;
  resume: string | null;
  image: string;
}

function Banner({ title, resume, image }: BannerProps) {
  return (
    <Container
      className="container-banner"
      backgroundImage={`url(${image})`}
      backgroundSize="100vw 80vh"
    >
      <Box className="title-box">{title}</Box>
      {resume && <Box className="resume-box">{resume}</Box>}
    </Container>
  );
}

export default Banner;
