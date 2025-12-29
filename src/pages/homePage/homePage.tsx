import Banner from "@/utils/banner";
import BannerHome from "../../assets/banner_home.png";
import HomeCarousel from "@/components/home/HomeCarousel";
import AlliesSection from "@/components/home/AlliesSection";
import { Heading } from "@chakra-ui/react";
import "./homePage.css";
import BigCarousel from "@/components/home/BigCarousel";

function HomePage() {
  const title = "SERVISEGUROS LEGAL";
  const resume =
    "Velamos por el bienestar y el amparo de las personas y sus patrimonios.";
  return (
    <>
      <Banner image={BannerHome} title={title} resume={resume} button={"Conocenos"} action={() => {window.location.href = "/about-us"}} />
      <BigCarousel />
      <Heading size="3xl" letterSpacing="tight" className="title">
        Nuestros Servicios
      </Heading>
      <HomeCarousel />
      <AlliesSection />
    </>
  );
}

export default HomePage;
