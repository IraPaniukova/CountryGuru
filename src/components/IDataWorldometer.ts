export interface IDataWorldometer{
    Country: string,
    Population: string;  //cannot set as a number because of the formating, easier to parse it to int later
    Yearly: number;
    Net: number;
    Density: number;
    "Land Area": number;
    Migrants: number;
  
}