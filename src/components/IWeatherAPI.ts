export interface IWeatherAPI{
     location: {
      localtime: string;
    };
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
            text: string;
            icon: string;        
        };
    wind_mph: number;
    wind_kph: number;
    };
}
