import { Autocomplete, Stack, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

interface CountrySearchProps {
    handleChange?: (country: string) => void;
    sortedCountries: string[];
}

export const CountrySearch: React.FC<CountrySearchProps> = ({ handleChange, sortedCountries, }) => {
    const handleSelectedCountry = (event: SyntheticEvent<Element, Event>, value: string | null) => {
        handleChange?.(value ?? '');
    };

    return (
        <Stack>
            <Autocomplete
                onChange={handleSelectedCountry}
                options={sortedCountries}
                id="country-search"
                autoHighlight //allows to enter first from the list (or chosen with coursor) on enter click
                renderInput={(params) => (
                    <TextField {...params} label="search country" variant="standard" />)}
            />
        </Stack>
    );
}