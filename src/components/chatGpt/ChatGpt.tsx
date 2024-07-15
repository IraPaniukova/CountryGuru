import { useState } from "react";
import { UserRequest } from "./userRequest/UserRequest";
import { DataChatGPT } from "../DataChatGPT";
import { IMessage } from "../IMessage";

interface ChatGptProps {
    selectedCountry?: string,
    selectedButton: string,
}

export const ChatGpt: React.FC<ChatGptProps> = ({ selectedCountry, selectedButton }) => {
    const [filteredUserInput, setFilteredUserInput] = useState('');
    const [userInput, setUserInput] = useState('');
    const [enterClicked, setEnterClicked] = useState(false);
    const FILTER = 'Answer if related to ' + selectedCountry + ', otherwise say No data. ';
    const [chat, setChat] = useState<IMessage[]>([]);
    const onEnterClick = () => {
        if (userInput && selectedCountry) {
            setEnterClicked(true);
            setFilteredUserInput(FILTER + userInput + 'in ' + selectedCountry);
            setChat((prevChat) => [...prevChat, { type: 'user', message: userInput }]);
            setUserInput('');
        }
    }
    const onClearClick = () => {
        setFilteredUserInput('');
        setUserInput('');
    }

    return (
        < >
            <DataChatGPT
                selectedCountry={selectedCountry}
                filteredUserInput={filteredUserInput}
                enterClicked={enterClicked}
                chat={chat}
                setChat={setChat}
                selectedButton={selectedButton}
            />
            <UserRequest
                userInput={userInput}
                setUserInput={setUserInput}
                onEnterClick={onEnterClick}
                onClearClick={onClearClick} />
        </>
    );
}