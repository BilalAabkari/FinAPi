import { Box, useTheme } from "@mui/material";
import { DwarfTopNav } from "../../../components/TopNav";
import { ManagementMenu } from "../Components";
import { useState } from "react";
import { MENU_ITEMS } from "../Components/constants.ts";
import TrackingItemsList from "./TrackingItemsList.tsx";

const MainManagementBoard = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState<number>(
    MENU_ITEMS.MANAGE_TRACKING_ITEMS,
  );

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
        <ManagementMenu onChange={(option) => setSelectedOption(option.id)} />
        {selectedOption === MENU_ITEMS.MANAGE_TRACKING_ITEMS && (
          <TrackingItemsList />
        )}
      </Box>
    </>
  );
};

export default MainManagementBoard;
