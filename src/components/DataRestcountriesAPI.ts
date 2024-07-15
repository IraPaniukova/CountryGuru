import { useEffect, useState } from "react";
import { ICountryAPI } from "./ICountryAPI";
import axios from "axios";

export const DataRestcountriesAPI = () =>{
    const [data, setData] = useState<ICountryAPI[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          const data: ICountryAPI[] = response.data;
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    return data;
}