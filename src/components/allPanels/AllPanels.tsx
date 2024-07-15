import { Stack } from "@mui/material"
import { LeftPanel } from "../leftPanel/LeftPanel"
import { useState } from "react";
import { CentralPanel } from "../centralPanel/CentralPanel";
import { alphabetical } from "radash";
import { ICountryAPI } from "../ICountryAPI";
import { DataRestcountriesAPI } from "../DataRestcountriesAPI";
import { DataWeatherAPI } from "../DataWeatherAPI";
import { RightPanel } from "../rightPanel/RightPanel";

interface AllPanelsProps {
    selectedButton: string,
    background: string,
}
export const AllPanels: React.FC<AllPanelsProps> = ({ selectedButton, background }) => {
    // Country data controls:
    const data = DataRestcountriesAPI();
    const [selectedCountry, setSelectedCountry] = useState<string>();
    const allCountries = Array.from(
        new Set(data.map((country: ICountryAPI) => country.name.common)),
    );
    const sortedCountries = alphabetical(allCountries, (c) => c);
    const selectedCountryData = data.find((country: ICountryAPI) => country.name.common === selectedCountry);
    const capital = selectedCountryData?.capital;
    //Currencies:
    const currenciesPerCountry = Object.keys(selectedCountryData?.currencies || {}); //here I have a list of currencies
    const allCurrencies =
        Array.from(new Set(data.flatMap((country: ICountryAPI) => {
            return Object.entries(country.currencies || {}).map(([key, value]) => `${key}, ${value.name}`);
        })));
    const sortedCurrencies = alphabetical(allCurrencies, (c) => c);
    //Weather Data Control:
    const weatherData = DataWeatherAPI({ capital });

    return (
        <Stack
            id="main-content"
            direction={{ xs: 'column', sm: 'row' }}
            // For small screens (xs), stack vertically, for larger screens (sm) stack horizontally
            spacing={2}
        >
            <LeftPanel
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                sortedCountries={sortedCountries}
                background={background}
            />
            <CentralPanel
                selectedCountryData={selectedCountryData}
                selectedButton={selectedButton}
                weatherData={weatherData}
                currenciesPerCountry={currenciesPerCountry}
                sortedCurrencies={sortedCurrencies}
            />
            {selectedCountry &&
                <RightPanel
                    selectedCountryData={selectedCountryData}
                    selectedButton={selectedButton}
                    background={background}
                />
            }
        </Stack>
    )
}