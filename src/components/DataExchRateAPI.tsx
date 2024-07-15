import { useEffect, useState } from "react";
import { IExchRateAPI } from "./IExchRateAPI";
import { EXCH_RATE_API_KEY } from "./Key";
import axios from "axios";

interface DataExchRateAPIProps {
    selectedCurrencyCode?: string,
    countryCurrency: string,
}
export const DataExchRateAPI = ({ selectedCurrencyCode, countryCurrency }: DataExchRateAPIProps) => {
    const [data, setData] = useState<IExchRateAPI | undefined>(undefined);
    const API_KEY = EXCH_RATE_API_KEY;
    const URL = 'https://v6.exchangerate-api.com/v6/' + API_KEY + '/pair/' + countryCurrency + '/' + selectedCurrencyCode;
    //RestCountries has 3 outdated currencies: 'CKD', 'CUC', 'KPW', so I am removing them
    useEffect(() => {
        const fetchData = async () => {
            if (selectedCurrencyCode && countryCurrency &&
                !['CKD', 'CUC', 'KPW'].includes(countryCurrency)) {
                try {
                    const response = await axios.get(URL);
                    const data = response.data;
                    setData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [selectedCurrencyCode, countryCurrency]);
    return data;
}