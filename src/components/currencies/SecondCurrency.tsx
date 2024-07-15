import { Typography } from "@mui/material"
import { ICountryAPI } from "../ICountryAPI"
import { DataExchRateAPI } from "../DataExchRateAPI";

interface SecondCurrencyProps {
    currenciesPerCountry?: string[],
    selectedCountryData?: ICountryAPI,
    selectedCurrency: string,
}
export const SecondCurrency: React.FC<SecondCurrencyProps> = ({ currenciesPerCountry, selectedCountryData, selectedCurrency }) => {
    const selectedCurrencyCode = selectedCurrency.split(',')[0];
    const countryCurrency = currenciesPerCountry ? currenciesPerCountry[1] : '';
    const exchRate = DataExchRateAPI({ selectedCurrencyCode, countryCurrency })?.conversion_rate;
    const currencyName = selectedCountryData?.currencies[countryCurrency].name

    return (
        <>
            {selectedCurrency && exchRate ?
                <Typography textAlign='center'> 1 {currencyName} = {exchRate} {selectedCurrencyCode}</Typography>
                :
                <Typography textAlign='center'> {currencyName}</Typography>
            }
        </>
    )
}