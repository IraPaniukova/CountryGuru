import { Box, Grid, Stack, Typography } from "@mui/material"
import { ICountryAPI } from "../ICountryAPI"
import { useEffect, useState } from "react";
import { FUN_BUTTON, HELLO_TEXT, SERIOUS_BUTTON } from "../../Constants";
import { CountryDataWordometer } from "../CountryDataWordometer";

interface CountryInfoProps {
    selectedCountryData?: ICountryAPI,
    selectedButton: string,
}

export const CountryInfo: React.FC<CountryInfoProps> = ({ selectedCountryData, selectedButton }) => {
    const selectedCountry = selectedCountryData?.name.common;
    const emblem = selectedCountryData?.coatOfArms.png;
    const areaKm = selectedCountryData?.area ?? 0;  //area in Km
    const areaMi = parseFloat((areaKm / 2.59).toFixed(2));  //area in Mi
    const [areaDefinition, setAreaDefinition] = useState(['', '']);// definitions for kid area - e.g. Big, M(Millions)
    const [areaSimple, setAreaSimple] = useState([0, 0]); //set simple area for kid interface
    const [populationSimple, setPopulationSimple] = useState(0); //set simple population for kid interface
    const [populationDefinition, setPopulationDefinition] = useState(['', '']); //definitions for kid population - e.g. Gigantic, B(Billions)
    const B = 1000000000; //1 Billion
    const M = 1000000; //1 Million
    const K = 1000; //1 thousand
    //the data was retrived from https://www.worldometers.info/world-population/population-by-country/ on 23/05/2024: 
    const WordometerPopulationString = CountryDataWordometer.find(data => data.Country === selectedCountry)?.Population ?? "";
    const currentPopulation = parseInt(WordometerPopulationString?.replace(/,/g, ""));
    const population = currentPopulation ? currentPopulation : selectedCountryData?.population ?? 0;
    const languages = selectedCountryData ? Object.values(selectedCountryData?.languages).join(', ') : '';

    useEffect(() => {
        if (areaMi >= M) {
            setAreaDefinition(['gigantic', 'M']);
            setAreaSimple([Math.round(areaKm / M), Math.round(areaMi / M)]);
        }
        else if (areaMi >= 500000 && areaMi < M) {
            setAreaDefinition(['big', 'M']);
            setAreaSimple([Math.round(areaKm / M),
            // areaMi < 750000 ? parseFloat((areaMi / M).toFixed(1)) : Math.round(areaMi / M)
            Math.round(areaMi / M)  //not sure which line is better here - the previous of this
            ]);
        }
        else if (areaMi >= 100000 && areaMi < 500000) {
            setAreaDefinition(['medium', 'K']); //I set M instead of K if nessesary in return()
            setAreaSimple([areaKm >= M ? Math.round(areaKm / M) : Math.round(areaKm / K),
            Math.round(areaMi / K)]);
        }
        else if (areaMi >= 50000 && areaMi < 100000) {
            setAreaDefinition(['small', 'K']);
            setAreaSimple([Math.round(areaKm / K), Math.round(areaMi / K)]);
        }
        else if (areaMi >= 800 && areaMi < 50000) {
            setAreaDefinition(['tiny', 'K']);
            setAreaSimple([Math.round(areaKm / K), Math.round(areaMi / K)]);
        }
        else {
            setAreaDefinition(['tiny', '']);
            setAreaSimple([areaKm, areaMi]);
        };
    }, [areaKm]);


    useEffect(() => {
        if (population >= B) {
            setPopulationSimple(parseFloat((population / B).toFixed(1)));
            setPopulationDefinition(['Gigantic', 'B']);
        }
        else if (population >= M && population < B) {
            setPopulationSimple(Math.round(population / M));
            setPopulationDefinition(['Big', 'M']);
        }
        else if (population >= 500000 && population < M) {
            setPopulationSimple(Math.round(population / K));
            setPopulationDefinition(['Quite big', 'K']);
        }
        else if (population >= 800 && population < 500000) {
            setPopulationSimple(Math.round(population / K));
            setPopulationDefinition(['Small', 'K']);
        }
        else {
            setPopulationSimple(population);
            setPopulationDefinition(['Small', '']);
        };
    }, [population]);

    return (
        <>
            {!selectedCountryData && <Typography textAlign='justify'>{HELLO_TEXT}</Typography>}
            {selectedCountryData &&
                <Stack alignItems="center">
                    <Typography mt={{ xs: '32px', sm: '0px' }} variant="h5" textAlign='center'> {selectedCountry}</Typography>
                    <Typography textAlign='center'>
                        is located in {selectedCountryData.region}.
                    </Typography>
                    <Stack direction='row' justifyContent='space-between' spacing={3} my={2}>
                        <Grid container direction='column'>
                            <Grid item display="flex" justifyContent="center">
                                <Box height={{ xs: '27vw', sm: '7vw' }} >
                                    <img
                                        src={selectedCountryData.flags.png}
                                        alt="Flag"
                                        style={{
                                            height: '100%',
                                            border: '1px solid lightgrey',
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item display="flex" justifyContent="center">
                                <Typography variant='caption' textAlign='center'>Flag</Typography>
                            </Grid>
                        </Grid>
                        {emblem &&
                            <Grid container direction='column'>
                                <Grid item display="flex" justifyContent="center">
                                    <Box height={{ xs: '27vw', sm: '7vw' }}>
                                        <img
                                            src={emblem}
                                            alt="Coat of arms"
                                            style={{
                                                height: '100%',
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item display="flex" justifyContent="center">
                                    <Typography variant='caption' >Emblem</Typography>
                                </Grid>
                            </Grid>}
                    </Stack>
                    {areaSimple && selectedButton === FUN_BUTTON ?
                        <>
                            <Typography textAlign='center'>
                                It has a {areaDefinition[0]} area about
                            </Typography>
                            <Typography textAlign='center'>
                                {areaSimple[0]} {areaKm >= M ? 'M' : areaDefinition[1]} km<sup>2</sup> / {areaSimple[1]} {areaDefinition[1]} mi<sup>2</sup>.
                            </Typography>
                        </> :
                        <Typography>
                            Area: {areaKm.toLocaleString()} km<sup>2</sup> or {areaMi.toLocaleString()} mi<sup>2</sup>.
                        </Typography>
                    }
                    {languages && languages.includes(',') ?
                        <Typography textAlign='center'>
                            Languages: {languages}.
                        </Typography> :
                        <Typography textAlign='center'>
                            Language: {languages}.
                        </Typography>
                    }
                    {population && selectedButton === FUN_BUTTON ?
                        <Typography textAlign='center'>
                            {populationDefinition[0]} population about {populationSimple} {populationDefinition[1]} people.
                        </Typography> :
                        <>
                            <Typography textAlign='center'>
                                Population about: {population.toLocaleString()} people.
                            </Typography>
                            {!isNaN(currentPopulation) && <Typography color='textSecondary' sx={{ fontSize: "9px" }}>*Population data from May 2024, Wordometer</Typography>}
                        </>}
                    {selectedButton === SERIOUS_BUTTON &&
                        <Typography textAlign='center'>
                            Car side: {selectedCountryData.car.side}.
                        </Typography>}
                    <Typography textAlign='center'>
                        Capital: {selectedCountryData.capital}.
                    </Typography>
                </Stack>
            }
        </>
    )
}