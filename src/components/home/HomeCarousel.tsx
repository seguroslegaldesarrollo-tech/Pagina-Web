import { Carousel, IconButton } from "@chakra-ui/react";
import "./HomeCarousel.css";
import logo from "../../assets/verificado.png";
import CarouselItem from "./CarouselItem";

function HomeCarousel() {
  const services = [
    {
      image: logo,
      title: "COPROPIEDADES",
      description: "Asegurabilidad para áreas comunes, RC y más",
    },
    {
      image: logo,
      title: "PYMES-TODO RIESGO",
      description: "Asegura el patrimonio de las compañías y directivos",
    },
    {
      image: logo,
      title: "VIDA GRUPO",
      description: "Ampara familiares de empleados en caso de deceso",
    },
    {
      image: logo,
      title: "SALUD GRUPAL",
      description: "Atención de calidad, oportuna y preferencial",
    },
    {
      image: logo,
      title: "COLECTIVAS AUTOS",
      description: "Asegura vehículos de trabajo o de empleados",
    },
    {
      image: logo,
      title: "TRANS DE MERCANCÍAS",
      description: "Protege la mercancía en tránsito",
    },
    {
      image: logo,
      title: "RESPONSABILIDAD CIVIL",
      description: "Daños o perjuicios causados a terceros",
    },
    {
      image: logo,
      title: "PÓLIZAS DE CUMPLIMIENTO",
      description: "Garantía para contratos de servicios o suministros",
    },
    {
      image: logo,
      title: "TODO RIESGO VEHÍCULOS",
      description: "Cubre daños o hurtos y perjuicios (RC)",
    },
    {
      image: logo,
      title: "SEGURO DECENAL",
      description:
        "Ampara propietarios de vivienda nueva ante posibles colapsos y daños patrimoniales",
    },
    {
      image: logo,
      title: "SOAT",
      description: "Seguro obligatorio",
    },
    {
      image: logo,
      title: "PÓLIZA DE SALUD",
      description:
        "Cobertura médica integral para consultas, urgencias, hospitalización y tratamientos especializados.",
    },
    {
      image: logo,
      title: "SEGURO DE VIDA",
      description:
        "Protección financiera para tu familia en caso de fallecimiento o incapacidad.",
    },
    {
      image: logo,
      title: "ASISTENCIA EN VIAJES",
      description:
        "Apoyo inmediato durante tus viajes: emergencias médicas, pérdida de equipaje y retrasos.",
    },
    {
      image: logo,
      title: "MASCOTAS",
      description:
        "Cuidado médico para tu mascota, incluyendo urgencias, cirugías y consultas veterinarias.",
    },
    {
      image: logo,
      title: "SEGURO DE HOGAR",
      description:
        "Protección contra daños, robos, incendios y otros riesgos que afecten tu vivienda.",
    },
    {
      image: logo,
      title: "SEGURO EDUCATIVO",
      description:
        "Asegura los estudios futuros de tus hijos con una planificación financiera a largo plazo.",
    },
    {
      image: logo,
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
