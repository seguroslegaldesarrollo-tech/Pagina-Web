import { Drawer, Button, Portal, CloseButton } from "@chakra-ui/react";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./ContactDrawer.css";

function ContactDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="xl" className="contact-button">
          <TbBrandWhatsapp style={{ width: "1.7rem", height: "1.7rem" }} />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Contactanos</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p className="contact-text">Estamos disponibles para ayudarte.</p>
              <p className="contact-text">Email:</p>
              <input type="email" />
              <p className="contact-text">Telefono:</p>
              <input type="number" />
              <p className="contact-text">Mensaje:</p>
              <input type="text" />
            </Drawer.Body>
            <Drawer.Footer>
              <Button>Contactar</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default ContactDrawer;
