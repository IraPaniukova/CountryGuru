import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { OPENAI_API_KEY } from "./Key";

interface DataChatGPTProps {
    selectedCountry?: string,
    answer: string,
    setAnswer: (value: string) => void,
}

export const DataChatGPTHistory: React.FC<DataChatGPTProps> = ({ selectedCountry, answer, setAnswer }) => {

    const API_KEY = OPENAI_API_KEY;
    const previousCountryRef = useRef<string | undefined>();
    const URL = 'https://api.openai.com/v1/chat/completions';
    //link to fetch is from https://platform.openai.com/docs/guides/text-generation 
    //const ERROR_MESSAGE = 'Sorry, an error occurred. Please try again later.';
    const PROMPT = 'List 3 main historical places in' + selectedCountry + '. Format: name and city (say the word city and city name).';
    useEffect(() => {
        const previousCountry = previousCountryRef.current;
        previousCountryRef.current = selectedCountry;
        if (selectedCountry && selectedCountry !== previousCountry) {
            const fetchData = async () => {
                try {
                    const response = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${API_KEY}`,  //using backticks (``) to read the API_KEY
                        },
                        body: JSON.stringify({
                            "model": "gpt-3.5-turbo",
                            "messages": [
                                {
                                    "role": "user",
                                    "content": PROMPT
                                }
                            ]
                        }),
                    });
                    const data = await response.json();
                    setAnswer(data?.choices[0]?.message?.content.trim());
                } catch (error) {
                    console.error('Error:', error);
                    console.log(`API Error: ${(error as Error).message}`);
                    //  alert(ERROR_MESSAGE);  //Not sure if I want this line here
                }
            };
            fetchData();
        }
    }, [selectedCountry]);

    return (
        <>
            {selectedCountry &&
                <Typography id='history'>{answer}</Typography>
            }
        </>

    )
}
