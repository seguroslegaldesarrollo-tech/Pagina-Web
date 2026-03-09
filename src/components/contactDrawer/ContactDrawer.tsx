import { Button, Box } from "@chakra-ui/react";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./ContactDrawer.css";

function ContactDrawer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/7UWREMKJXKSHE1", "_blank");
  };

  return (
    <Box className="whatsapp-button-container">
      <Button 
        variant="outline" 
        size="xl" 
        className="contact-button"
        onClick={handleWhatsAppClick}
        aria-label="Contactar por WhatsApp"
      >
        <TbBrandWhatsapp style={{ width: "1.7rem", height: "1.7rem" }} />
      </Button>
    </Box>
  );
}

export default ContactDrawer;
