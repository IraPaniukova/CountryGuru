import { Button, Stack, TextField } from "@mui/material";

interface UserRequestProps {
    userInput: string,
    setUserInput: (newValue: string) => void,
    onEnterClick: () => void,
    onClearClick: () => void
}

export const UserRequest: React.FC<UserRequestProps> = ({ userInput, setUserInput, onEnterClick, onClearClick }) => {
    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };
    return (
        <Stack>
            <TextField
                id="question-about-country"
                label="Ask your question about the country"
                value={userInput}
                onChange={handleUserInput}
                multiline
                maxRows={4}
            />
            <Stack direction='row'>
                <Button disabled={!userInput} onClick={onEnterClick}>Enter</Button>
                <Button disabled={!userInput} onClick={onClearClick}>Clear</Button>
            </Stack>
        </Stack>
    )
}