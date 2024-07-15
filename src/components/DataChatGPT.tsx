import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { OPENAI_API_KEY } from "./Key";
import { FUN_BUTTON } from "../Constants";
import { IMessage } from "./IMessage";

interface DataChatGPTProps {
    selectedCountry?: string,
    filteredUserInput: string,
    enterClicked: boolean,
    chat: IMessage[],
    setChat: React.Dispatch<React.SetStateAction<IMessage[]>>,
    selectedButton: string,
}

export const DataChatGPT: React.FC<DataChatGPTProps> = ({ selectedCountry, filteredUserInput, enterClicked, chat, setChat, selectedButton }) => {
    const API_KEY = OPENAI_API_KEY;
    const URL = 'https://api.openai.com/v1/chat/completions';
    //link to fetch is from https://platform.openai.com/docs/guides/text-generation 
    const NO_DATA_ANSWER = 'There is no data about it for ' + selectedCountry + '. Try to modify the question.';
    const ERROR_MESSAGE = 'Sorry, an error occurred. Please try again later.';

    useEffect(() => {
        if (filteredUserInput.trim() !== '' && enterClicked) {
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
                                    "content": filteredUserInput
                                }
                            ]
                        }),
                    });
                    const data = await response.json();
                    const truncatedResponse = data?.choices[0]?.message?.content.trim();
                    const result = truncatedResponse === 'No data.' ? NO_DATA_ANSWER : truncatedResponse;
                    setChat((prevChat) => [...prevChat, { type: 'Country Guru', message: result ? result : ERROR_MESSAGE }]);
                } catch (error) {
                    console.error('Error:', error);
                    // setBotMessage(`API Error: ${(error as Error).message}`);
                    alert(ERROR_MESSAGE);
                }
            };
            fetchData();
        }
    }, [filteredUserInput]);

    //clear chat on selectedCountry change
    useEffect(() => {
        setChat([]);
    }, [selectedCountry]);

    return (
        <>
            {selectedCountry &&
                <Stack id='chat'
                    spacing={1} p={2} sx={{
                        height: '30vh',
                        background: 'white',
                        overflowY: { xs: 'auto', sm: 'scroll' }
                    }}>
                    {chat.map((message, index) => (
                        <Typography key={index}
                            sx={{
                                ...(selectedButton === FUN_BUTTON ? {
                                    textAlign: message.type === 'user' ? 'right' : 'left',
                                    background: message.type === 'user' ? '#cadbfa' : '#FFD1DC',
                                    borderRadius: '15px',
                                    padding: '8px',
                                } :
                                    { textAlign: message.type === 'user' ? 'right' : 'left', })
                            }}
                        >
                            <strong>{message.type}:</strong> {message.message}
                        </Typography>
                    ))}
                </Stack>}
        </>
    )
}
