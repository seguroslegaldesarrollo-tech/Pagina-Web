import Banner from "@/utils/banner";
import BannerHome from "../../assets/banner_home.png";
import HomeCarousel from "@/components/home/HomeCarousel";
import AlliesSection from "@/components/home/AlliesSection";
import { Box, Heading } from "@chakra-ui/react";
import "./homePage.css";
import BigCarousel from "@/components/home/BigCarousel";

function HomePage() {
  const title = "LEGAL SEGUROS";
  return (
    <Box bg="white" className="page-background">
      <Banner image={BannerHome} title={title} />
      <BigCarousel />
      <Heading size="3xl" letterSpacing="tight" className="title">
        Nuestros Servicios
      </Heading>
      <HomeCarousel />
      <AlliesSection />
    </Box>
  );
}

export default HomePage;
