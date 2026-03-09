import { Box, Heading, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para iconos de Leaflet en React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface ContactMapProps {
  height?: string;
}

function ContactMap({ height = "400px" }: ContactMapProps) {
  // Coordenadas exactas para: Cra 59 No. 45A - 40, Bogotá D.C
  const officeLocation: [number, number] = [4.650222150169219, -74.09240191197465];

  return (
    <Box w="100%" maxW="6xl" mx="auto" mb={12}>
      <Heading size="lg" mb={4} textAlign="center" color="var(--primary-color)">
        Encuéntranos en nuestro mapa
      </Heading>
      <Box
        w="100%"
        h={height}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        zIndex={1}
      >
        <MapContainer
          center={officeLocation}
          zoom={18}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={officeLocation}>
            <Popup>
              <div style={{ padding: "5px", fontFamily: "Arial, sans-serif" }}>
                <h3 style={{ margin: "0 0 5px 0", color: "#2c5282" }}>
                  Seguros Legal
                </h3>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  Cra 59 No. 45A - 40<br />
                  Bogotá D.C, Colombia<br />
                  +57 315 3507645
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
      <Text textAlign="center" mt={2} fontSize="sm" color="gray.600">
        Cra 59 No. 45A - 40, Bogotá D.C
      </Text>
    </Box>
  );
}

export default ContactMap;
