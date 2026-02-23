import { Heading } from "@chakra-ui/react";
import "./AlliesSection.css";
import segurosMundial from "../../assets/seguros-mundial.png";
import mapfre from "../../assets/mapfre.png";
import sura from "../../assets/sura.png";
import seguros from "../../assets/seguros-del-estado.png";
import hdi from "../../assets/HDI-SEGUROS.png";
import previsora from "../../assets/previsora.png";
import bolivar from "../../assets/bolivar.png";
import axa from "../../assets/axa-colpatria.png";
import solidaria from "../../assets/solidaria.png";
import equidad from "../../assets/equidad.png";
import allianz from "../../assets/allianz.png";
import qualitas from "../../assets/qualitas.png";


function AlliesSection(){
    return (
      <>
        <Heading size="3xl" className="allies-title">
          Conoce a nuestros aliados
        </Heading>
        <div className="allies-section">
          <img src={segurosMundial} className="image"/>
          <img src={mapfre} className="image"/>
          <img src={sura} className="image"/>
          <img src={seguros} className="image"/>
          <img src={hdi} className="image"/>
          <img src={previsora} className="image"/>
          <img src={equidad} className="image"/>
          <img src={solidaria} className="image"/>
          <img src={axa} className="image"/>
          <img src={bolivar} className="image"/>
          <img src={allianz} className="image"/>
          <img src={qualitas} className="image"/>
        </div>
      </>
    );
}

export default AlliesSection;