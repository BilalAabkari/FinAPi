import { Paper, styled } from "@mui/material";
import { CustomModalProps } from "./Types.ts";
import { Modal } from "@mui/material";

const StyledPaper = styled(Paper)({
    minHeight: 300,
    minWidth: 500,
    position: "fixed",
    top: "10%",
    left: "25%",
    width: "fit-content",
});

const CustomModal = ({ open, paperSxProps, children }: CustomModalProps) => {
    return (
        <Modal open={open}>
            <StyledPaper sx={paperSxProps}>{children}</StyledPaper>
        </Modal>
    );
};

export default CustomModal;
