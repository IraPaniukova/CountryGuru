export interface ICountryAPI  {
  //from Rescountries API
    name: {
      common: string;
    };
    region: string;
    flags: {
      png: string;
    };
    maps: {
      googleMaps: string;
    };
    currencies: {
    [key: string]: {
          name: string;
         symbol: string;
       }
    };
    capital: string;
    languages: string[]; 
    area: number;
    population: number;
    car: {
      side: string;
    };
    coatOfArms: {
      png: string;
    };
  }