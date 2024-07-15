import { Stack } from "@mui/material"
import React from "react"
import { CountryInfo } from "../countryInfo/CountryInfo"
import { ICountryAPI } from "../ICountryAPI"
import { Weather } from "../weather/Weather"
import { IWeatherAPI } from "../IWeatherAPI"
import { Currencies } from "../currencies/Currencies"
import { SERIOUS_BUTTON } from "../../Constants"
interface CentralPanelProps {
    selectedCountryData?: ICountryAPI,
    selectedButton: string,
    weatherData?: IWeatherAPI,
    currenciesPerCountry?: string[],
    sortedCurrencies: string[],
}

export const CentralPanel: React.FC<CentralPanelProps> = ({ selectedCountryData, selectedButton, weatherData, currenciesPerCountry, sortedCurrencies }) => {
    return (
        <Stack
            id='panel_central'
            width={{ xs: 'auto', sm: 'calc(33vw - 64px)' }}
            paddingX={4}
        >
            <CountryInfo selectedCountryData={selectedCountryData} selectedButton={selectedButton} />
            <Weather weatherData={weatherData} selectedButton={selectedButton} selectedCountryData={selectedCountryData} />
            {selectedButton === SERIOUS_BUTTON && selectedCountryData &&
                <Currencies
                    currenciesPerCountry={currenciesPerCountry}
                    selectedCountryData={selectedCountryData}
                    sortedCurrencies={sortedCurrencies}
                />}
        </Stack>
    )
}