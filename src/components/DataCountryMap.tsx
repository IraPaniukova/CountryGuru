import { Stack } from "@mui/material";
import { GOOGLEMAP_API_KEY } from "./Key";

interface DataCountryMapProps {
  selectedCountry?: string
}
export const DataCountryMap: React.FC<DataCountryMapProps> = ({ selectedCountry }) => {
  const apiKey = GOOGLEMAP_API_KEY;

  const embedUrl = selectedCountry ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(selectedCountry)}` : undefined;

  return (
    <Stack>
      <iframe
        width="100%"
        height="400"
        src={embedUrl}
        title="Google Map"
      />
    </Stack>
  );
};



