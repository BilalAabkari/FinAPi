import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledBox = styled(Box)({
    overflowY: "auto",
    maxHeight: "700px",
});

interface ModalContentProps {
    children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
    return <StyledBox>{children}</StyledBox>;
};

export default ModalContent;
