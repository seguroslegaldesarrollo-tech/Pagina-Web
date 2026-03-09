import { Heading } from "@chakra-ui/react";
import "./ImportantAlliesSection.css";
import global from "../../assets/global-card.png";
import crediseguros from "../../assets/crediseguros.png";
import finesa from "../../assets/finesa.png";
import panamerican from "../../assets/panamerican.png";


function ImportantAlliesSection(){
    return (
      <>
        <Heading size="3xl" className="allies-title">
          Nuestros aliados estrategicos
        </Heading>
        <div className="important-allies-section">
          <img src={global} className="image-big" alt="Global Seguros"/>
          <img src={panamerican} className="image-big" alt="Pan American Life"/>
          <img src={crediseguros} className="image-big" alt="Crediseguros"/>
          <img src={finesa} className="image-big" alt="Finesa"/>
        </div>
      </>
    );
}

export default ImportantAlliesSection;