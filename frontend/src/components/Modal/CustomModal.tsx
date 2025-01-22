import { Backdrop, Dialog, styled } from "@mui/material";
import { CustomModalProps } from "./Types.ts";

const StyledPaper = styled(Dialog)({
  minHeight: 300,
  minWidth: 500,
  width: "fit-content",
});

const CustomModal = ({ open, children }: CustomModalProps) => {
  return (
    <Backdrop sx={{ top: "-30%" }} open={open}>
      <StyledPaper open={open}>{children}</StyledPaper>
    </Backdrop>
  );
};

export default CustomModal;
