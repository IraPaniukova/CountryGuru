import { Button, Stack, styled } from "@mui/material"
import { FUN_BUTTON, SERIOUS_BUTTON } from "../../Constants";

interface MainScreenProps {
    seriousButtonClick: () => void,
    funButtonClick: () => void,
}
const MyButton = styled(Button)({
    height: '100px',
    width: '250px',
});
export const MainScreen: React.FC<MainScreenProps> = ({ seriousButtonClick, funButtonClick }) => {
    return (
        <Stack alignItems="center" pt={7} spacing={2}>
            <MyButton variant="contained" size="large"
                onClick={seriousButtonClick}>
                {SERIOUS_BUTTON}
            </MyButton>
            <MyButton variant="contained" size="large"
                onClick={funButtonClick} >
                {FUN_BUTTON}
            </MyButton>
        </Stack>
    )
}