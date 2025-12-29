import { Drawer, Button, Portal, CloseButton, Box, Text, chakra, Stack, Input, Textarea } from "@chakra-ui/react";
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
              <Box maxW="3xl">
                        <Text mb={6}>
                          Tu opinión cuenta para nosotros. Si tienes alguna inquietud, háznolo
                          saber
                        </Text>
              
                        <chakra.form
                          as="form"
                          action="https://formspree.io/f/mojqkwoo"
                          method="POST"
                        >
                          <Stack gap={4}>
                            <Input
                              name="nombre"
                              placeholder="Nombre completo"
                              borderRadius="full"
                            />
              
                            <Input
                              name="telefono"
                              placeholder="Teléfono móvil/celular"
                              borderRadius="full"
                            />
              
                            <Input
                              type="email"
                              name="email"
                              placeholder="Correo electrónico"
                              borderRadius="full"
                            />
              
                            <Input name="asunto" placeholder="Asunto" borderRadius="full" />
              
                            <Textarea
                              name="mensaje"
                              placeholder="Mensaje"
                              borderRadius="xl"
                              rows={5}
                            />
              
                            <Button
                              type="submit"
                              size="lg"
                              alignSelf="flex-start"
                              px={10}
                            >
                              Enviar
                            </Button>
                          </Stack>
                        </chakra.form>
                      </Box>
            </Drawer.Body>
            <Drawer.Footer>
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
