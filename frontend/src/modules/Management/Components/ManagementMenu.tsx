import { Box, Button, styled, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useState } from "react";
import { MENU_ITEMS } from "./constants.ts";

const StyledBox = styled(Box)({
  height: "100%",
  width: "250px",
});

interface MenuOptionStyledProps {
  backgroundColor: string;
}

const MenuOption = styled(Button, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})(({ theme, backgroundColor }: MenuOptionStyledProps & { theme: Theme }) => ({
  width: "100%",
  height: "60px",
  borderBottom: "solid",
  borderColor: "#a5a5a5",
  borderRadius: "0",
  backgroundColor,
  "&:hover": {
    borderColor: theme.extraColors.detail,
  },
}));

interface MenuOptionProps {
  id: number;
  text: string;
}

interface ManagementMenuProps {
  onChange: (option: MenuOptionProps) => void;
}

const ManagementMenu = ({ onChange }: ManagementMenuProps) => {
  const theme: Theme = useTheme();

  const [selectedOption, setSelectedOption] = useState<MenuOptionProps | null>(
    null,
  );

  const options: MenuOptionProps[] = [
    {
      id: MENU_ITEMS.MANAGE_TRACKING_ITEMS,
      text: "MANAGE TRACKING ITEMS",
    },
    {
      id: 2,
      text: "STATISTICS",
    },
  ];

  return (
    <>
      <StyledBox>
        {options.map((option) => (
          <MenuOption
            key={option.id}
            backgroundColor={
              option.id === selectedOption?.id ? "#bababa" : "#ffffff"
            }
            onClick={() => {
              onChange(option);
              setSelectedOption(
                selectedOption?.id === option.id ? null : option,
              );
            }}
          >
            {option.text}
          </MenuOption>
        ))}
      </StyledBox>
      <Box
        sx={{
          width: "4px",
          backgroundColor: theme.extraColors.detail,
          height: "100%",
        }}
      ></Box>
    </>
  );
};

export default ManagementMenu;
