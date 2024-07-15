import { Stack } from '@mui/system';
import { DataCountryMap } from '../DataCountryMap';
import { CountrySearch } from '../countrySearch/CountrySearch';

interface LeftPanelProps {
  selectedCountry?: string,
  setSelectedCountry: (value: string) => void,
  sortedCountries: string[],
  background: string,
}
export const LeftPanel: React.FC<LeftPanelProps> = (
  { selectedCountry, setSelectedCountry, sortedCountries, background }) => {

  const handleChange = (value: string) => {
    setSelectedCountry(value !== null ? value : ''); //I need to set the value as an empty string instead of null, otherwise TypeScript would give me problems (I tried different options)
  };

  return (
    <Stack
      id='panel_left'
      width={{ xs: 'auto', sm: 'calc(33vw - 64px)' }}
      spacing={2}
      padding={4}
      sx={{
        backgroundColor: background,
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CountrySearch sortedCountries={sortedCountries} handleChange={handleChange} />
      <Stack>
        {selectedCountry ?
          <DataCountryMap selectedCountry={selectedCountry} /> : null}
      </Stack>
    </Stack>
  );
};
