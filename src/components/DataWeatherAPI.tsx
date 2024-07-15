import { useEffect, useState } from "react";
import axios from "axios";
import { IWeatherAPI } from "./IWeatherAPI";
import { WEATHER_API_KEY } from "./Key";

interface DataWeatherAPIProps {
  capital?: string,
}
export const DataWeatherAPI = ({ capital }: DataWeatherAPIProps) => {
  const [data, setData] = useState<IWeatherAPI | undefined>(undefined);
  const API_KEY = WEATHER_API_KEY;
  const URL = 'https://api.weatherapi.com/v1/current.json';
  useEffect(() => {
    const fetchData = async () => {
      if (capital) try {
        const response = await axios.get(URL, {
          params: {
            key: API_KEY,
            q: capital[0]
          },
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [capital]);
  return data;
}