import { Box, Stack, Typography } from "@mui/material";
import { IWeatherAPI } from "../IWeatherAPI";
import { FUN_BUTTON } from "../../Constants";
import { useEffect, useState } from "react";
import { ICountryAPI } from "../ICountryAPI";

interface WeatherProps {
    weatherData?: IWeatherAPI,
    selectedButton: string,
    selectedCountryData?: ICountryAPI,
}

export const Weather: React.FC<WeatherProps> = ({ weatherData, selectedButton, selectedCountryData }) => {
    const [temp, setTemp] = useState(''); //temperature (t) definition for kids
    const UNDEFINED_T = 999;//I can't use 0 for t because it is a valid number and I need a defined t for useEffect
    const tempC = weatherData?.current.temp_c ?? UNDEFINED_T;
    const tempF = weatherData?.current.temp_f;
    const windKph = weatherData?.current.wind_kph;
    const windMph = weatherData?.current.wind_mph;
    const condition = weatherData?.current.condition.text.toLocaleLowerCase();
    const icon = weatherData?.current.condition.icon;
    useEffect(() => {
        if (tempC >= 25 && tempC < UNDEFINED_T) { setTemp('hot') }
        else if (tempC >= 19 && tempC < 25) { setTemp('warm') }
        else if (tempC >= 10 && tempC < 19) { setTemp('cool') }
        else if (tempC >= 0 && tempC < 10) { setTemp('cold') }
        else if (tempC >= -5 && tempC < 0) { setTemp('very cold') }
        else if (tempC >= -13 && tempC < -5) { setTemp('freezing') }
        else { setTemp('absolutely freezing') }
    }), [tempC];

    return (
        <>
            {weatherData && selectedCountryData && (selectedButton === FUN_BUTTON ?
                <Stack >
                    <Typography textAlign='center'>
                        Current weather:
                    </Typography>
                    <Stack direction='row' alignItems='center' justifyContent='center'  >
                        <Typography textAlign='center'> {condition} and {temp}</Typography>
                        <Box sx={{ marginY: '-20px' }}>
                            <img
                                src={icon}
                                alt="weather condition icon"
                                style={{
                                    height: '100%',
                                }}
                            />
                        </Box>
                    </Stack>
                    <Typography textAlign='center'>
                        {tempC}<sup>o</sup>C / {tempF}<sup>o</sup>F
                    </Typography>
                </Stack> :
                <Stack>
                    <Typography textAlign='center'>
                        Weather conditions in the capital: {condition}
                    </Typography>
                    <Typography textAlign='center'>
                        temperature: {tempC}<sup>o</sup>C / {tempF}<sup>o</sup>F
                    </Typography>
                    <Typography textAlign='center'>
                        wind: {windKph} Kph / {windMph} Mph
                    </Typography>
                </Stack>)}
        </>
    )
}