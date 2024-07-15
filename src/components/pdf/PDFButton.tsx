import { Button, Tooltip } from "@mui/material";

interface PDFButtonProps {
    onClick: () => void;
}

export const PDFButton: React.FC<PDFButtonProps> = ({ onClick }) => {
    return (
        <Tooltip title="Save data for a selected country" placement="bottom-start">
            <Button style={{ height: '30px' }} onClick={onClick}>
                Generate PDF
            </Button>
        </Tooltip>
    );
};