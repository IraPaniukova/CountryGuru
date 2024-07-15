import { Autocomplete, Stack, TextField, Typography } from "@mui/material"
import { ICountryAPI } from "../ICountryAPI"
import React, { SyntheticEvent, useState } from "react";
import { DataExchRateAPI } from "../DataExchRateAPI";
import { SecondCurrency } from "./SecondCurrency";

interface CurrenciesProps {
    currenciesPerCountry?: string[],
    selectedCountryData?: ICountryAPI,
    sortedCurrencies: string[],
}

export const Currencies: React.FC<CurrenciesProps> = ({ currenciesPerCountry, selectedCountryData, sortedCurrencies }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const handleChange = (value: string) => {
        setSelectedCurrency(value !== null ? value : '');
    };
    const handleSelectedCurrency = (event: SyntheticEvent<Element, Event>, value: string | null) => {
        handleChange?.(value ?? '')
    };
    const selectedCurrencyCode = selectedCurrency.split(',')[0];
    const countryCurrency = currenciesPerCountry ? currenciesPerCountry[0] : '';
    const exchRate = DataExchRateAPI({ selectedCurrencyCode, countryCurrency })?.conversion_rate;
    const currencyName = selectedCountryData?.currencies[countryCurrency].name
    const selectedCountry = selectedCountryData?.name.common;
    const checkSecondCurrency = currenciesPerCountry ? currenciesPerCountry[1] : '';
    //RestCountries has 3 outdated currencies: 'CKD', 'CUC', 'KPW', so I am "removing" them in return:
    return (
        <>
            <Stack paddingY={2} paddingX={1} marginY={1}
                sx={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography textAlign='center'>{selectedCountry}{`'`}s currency:
                </Typography>
                {!['CUC', 'CKD'].includes(countryCurrency) &&
                    (selectedCurrency && exchRate ?
                        <Typography textAlign='center'> 1 {currencyName} = {exchRate} {selectedCurrencyCode}</Typography>
                        :
                        <Typography textAlign='center'> {currencyName}</Typography>
                    )
                }
                {checkSecondCurrency &&
                    <SecondCurrency currenciesPerCountry={currenciesPerCountry} selectedCountryData={selectedCountryData} selectedCurrency={selectedCurrency} />}
            </Stack>
            {countryCurrency !== 'KPW' &&
                <Stack marginX={2} >
                    <Autocomplete
                        onChange={handleSelectedCurrency}
                        options={sortedCurrencies}
                        id="currency-search"
                        autoHighlight //allows to enter first from the list (or chosen with coursor) on enter click
                        renderInput={(params) => (
                            <TextField {...params} label="your currency choice" variant="standard" />)}
                    />
                </Stack>}
        </>
    )
}