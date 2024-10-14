import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

interface CustomBoxProps {
  backgroundColor?: string;
}

const StyledBottomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  position: "absolute",
  top: 0,
  width: "100%",
  left: 0,
  height: "50%",
  backgroundColor: theme.palette.primary.main,
  zIndex: -10000,
}));
const StyledTopBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  left: 0,
  height: "50%",
  backgroundColor: theme.extraColors.detail,
  zIndex: -10000,
}));

interface TwoColorBackgroundProps {
  children: ReactNode;
}

const TwoColorBackground = ({ children }: TwoColorBackgroundProps) => {
  return (
    <>
      <StyledTopBox></StyledTopBox>

      <StyledBottomBox></StyledBottomBox>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default TwoColorBackground;
