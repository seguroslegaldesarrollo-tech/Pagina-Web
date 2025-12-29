import { Carousel, IconButton } from "@chakra-ui/react";
import "./HomeCarousel.css";
import copropiedades from "../../assets/terraza.png";
import pymes from "../../assets/compania.png";
import familia from "../../assets/familia.png";
import salud from "../../assets/estrellas-de-calificacion.png";
import colectivas from "../../assets/lavado-de-autos.png";
import mercancias from "../../assets/coche-de-mercancias.png";
import responsabilidad from "../../assets/roto.png";
import polizas from "../../assets/contrato.png";
import todoRiesgo from "../../assets/seguro-de-auto.png";
import decenal from "../../assets/seguro-de-hogar-1.png";
import soat from "../../assets/proteger.png";
import vida from "../../assets/salud.png";
import seguroVida from "../../assets/seguro-medico.png";
import viaje from "../../assets/viaje.png";
import mascotas from "../../assets/cuidado-de-mascotas.png";
import seguroHogar from "../../assets/seguro-de-hogar.png";
import seguroEducativo from "../../assets/seguro-educativo.png";
import CarouselItem from "./CarouselItem";

function HomeCarousel() {
  const services = [
    {
      image: copropiedades,
      title: "COPROPIEDADES",
      description: "Asegurabilidad para áreas comunes, RC y más",
    },
    {
      image: pymes,
      title: "PYMES-TODO RIESGO",
      description: "Asegura el patrimonio de las compañías y directivos",
    },
    {
      image: familia,
      title: "VIDA GRUPO",
      description: "Ampara familiares de empleados en caso de deceso",
    },
    {
      image: salud,
      title: "SALUD GRUPAL",
      description: "Atención de calidad, oportuna y preferencial",
    },
    {
      image: colectivas,
      title: "COLECTIVAS AUTOS",
      description: "Asegura vehículos de trabajo o de empleados",
    },
    {
      image: mercancias,
      title: "TRANS DE MERCANCÍAS",
      description: "Protege la mercancía en tránsito",
    },
    {
      image: responsabilidad,
      title: "RESPONSABILIDAD CIVIL",
      description: "Daños o perjuicios causados a terceros",
    },
    {
      image: polizas,
      title: "PÓLIZAS DE CUMPLIMIENTO",
      description: "Garantía para contratos de servicios o suministros",
    },
    {
      image: todoRiesgo,
      title: "TODO RIESGO VEHÍCULOS",
      description: "Cubre daños o hurtos y perjuicios (RC)",
    },
    {
      image: decenal,
      title: "SEGURO DECENAL",
      description:
        "Ampara propietarios de vivienda nueva ante posibles colapsos y daños patrimoniales",
    },
    {
      image: soat,
      title: "SOAT",
      description: "Seguro obligatorio",
    },
    {
      image: vida,
      title: "PÓLIZA DE SALUD",
      description:
        "Cobertura médica integral para consultas, urgencias, hospitalización y tratamientos especializados.",
    },
    {
      image: seguroVida,
      title: "SEGURO DE VIDA",
      description:
        "Protección financiera para tu familia en caso de fallecimiento o incapacidad.",
    },
    {
      image: viaje,
      title: "ASISTENCIA EN VIAJES",
      description:
        "Apoyo inmediato durante tus viajes: emergencias médicas, pérdida de equipaje y retrasos.",
    },
    {
      image: mascotas,
      title: "MASCOTAS",
      description:
        "Cuidado médico para tu mascota, incluyendo urgencias, cirugías y consultas veterinarias.",
    },
    {
      image: seguroHogar,
      title: "SEGURO DE HOGAR",
      description:
        "Protección contra daños, robos, incendios y otros riesgos que afecten tu vivienda.",
    },
    {
      image: seguroEducativo,
      title: "SEGURO EDUCATIVO",
      description:
        "Asegura los estudios futuros de tus hijos con una planificación financiera a largo plazo.",
    },
    {
      image: decenal,
      title: "RESIDENCIAL, COMERCIAL O MIXTA",
      description:
        "Protege las áreas comunes de las propiedades horizontales frente a daños materiales y pérdidas",
    },
  ];
  return (
    <Carousel.Root
      slideCount={services.length}
      slidesPerPage={4}
      className="carousel-container"
      autoplay={{ delay: 5000 }}
    >
      <Carousel.ItemGroup>
        {services.map((service, index) => (
          <Carousel.Item index={index} key={index}>
            <CarouselItem
              index={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            {"<"}
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            {">"}
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}

export default HomeCarousel;
