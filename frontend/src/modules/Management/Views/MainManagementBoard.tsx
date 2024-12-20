import { Box, useTheme } from "@mui/material";
import { DwarfTopNav } from "../../../components/TopNav";
import { ManagementMenu } from "../Components";

const MainManagementBoard = () => {
  const theme = useTheme();

  return (
    <>
      <DwarfTopNav />
      <Box
        sx={{
          marginTop: "68px",
          backgroundColor: theme.palette.background.default,
          height: "calc(100vh - 68px)",
          width: "100vw",
          display: "flex",
        }}
      >
        <ManagementMenu />
      </Box>
    </>
  );
};

export default MainManagementBoard;
