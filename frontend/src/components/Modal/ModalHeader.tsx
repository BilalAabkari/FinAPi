import { Box, Divider, styled, Typography, useTheme } from "@mui/material";
import { ModalHeaderProps } from "./Types.ts";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: 10,
  marginRight: 10,
  paddingTop: 8,
  paddingBottom: 8,
  alignItems: "center",
});

const ModalHeader = ({ title, children }: ModalHeaderProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <StyledBox>
        <Typography variant={"h6"}>{title}</Typography>
        <Box>{children}</Box>
      </StyledBox>
      <Divider
        sx={{ backgroundColor: theme.extraColors.detail, height: 2 }}
      ></Divider>
    </Box>
  );
};

export default ModalHeader;
