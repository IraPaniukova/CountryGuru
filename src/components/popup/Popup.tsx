import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FUN_BUTTON } from "../../Constants";

interface PopupProps {
    selectedButton: string;
    open: boolean;
    closePopup: () => void;
    seriousButtonClick: () => void;
    funButtonClick: () => void;

}

export const Popup: React.FC<PopupProps> = ({ selectedButton, open, closePopup, seriousButtonClick, funButtonClick }) => {
    return (
        <Dialog
            open={open}
            onClose={closePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Do you want to continue?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    By switching to another mode, if you have any displayed data about a country, you will lose it.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closePopup}>CANCEL</Button>
                {selectedButton === FUN_BUTTON ?
                    <Button onClick={seriousButtonClick} autoFocus> OK</Button> :
                    <Button onClick={funButtonClick} autoFocus> OK</Button>
                }
            </DialogActions>
        </Dialog>
    )
}