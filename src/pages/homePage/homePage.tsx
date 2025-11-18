import Banner from "@/utils/banner";
import BannerHome from "../../assets/banner_home.jpg";
import HomeCarousel from "@/components/home/HomeCarousel";
import { Heading } from "@chakra-ui/react";
import "./homePage.css";
import BigCarousel from "@/components/home/BigCarousel";

function HomePage() {
  const title = "Serviseguros Legal";
  const resume =
    "Velamos por el bienestar y el amparo de las personas y sus patrimonios.";
  return (
    <>
      <Banner image={BannerHome} title={title} resume={resume} />
      <BigCarousel />
      <Heading size="2xl" letterSpacing="tight" className="title">
        Nuestros Servicios
      </Heading>
      <HomeCarousel />
    </>
  );
}

export default HomePage;
