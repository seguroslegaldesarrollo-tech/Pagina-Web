import { Container, Box, Button } from "@chakra-ui/react";
import "./banner.css";

interface BannerProps {
  title: string;
  resume: string | null;
  image: string;
  button: string | null;
  action: () => void | null;
}

function Banner({ title, resume, image, button, action }: BannerProps) {
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
      {resume && (
        <Box className="resume-box">
          {resume} {button && <Button className="button-banner" onClick={action}>{button}</Button>}
        </Box>
      )}
    </Container>
  );
}

export default Banner;
