import React, { useState } from "react"
import { ICountryAPI } from "../ICountryAPI"
import { Stack, Typography } from "@mui/material"
import { ChatGpt } from "../chatGpt/ChatGpt"
import { DataChatGPTHistory } from "../DataChatGPTHistory"

interface RightPanelProps {
    selectedCountryData?: ICountryAPI,
    selectedButton: string,
    background: string,
}

export const RightPanel: React.FC<RightPanelProps> = ({ selectedCountryData, selectedButton, background }) => {
    const [answer, setAnswer] = useState('');
    return (
        <Stack
            id='panel_right'
            width={{ xs: 'auto', sm: 'calc(33vw - 64px)' }}
            spacing={2}
            padding={4}
            sx={{
                backgroundColor: background,
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Stack maxHeight='27vh' sx={{ overflowY: { xs: 'auto', sm: 'scroll' } }} >
                {selectedCountryData && <Typography> Famous historical places to attend:</Typography>}
                <DataChatGPTHistory selectedCountry={selectedCountryData?.name.common} answer={answer} setAnswer={setAnswer} />
            </Stack>
            <ChatGpt
                selectedCountry={selectedCountryData?.name.common}
                selectedButton={selectedButton}
            />
        </Stack>
    )
}