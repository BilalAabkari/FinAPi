import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import CarIcon from "../../assets/caricon.png";
import { useAuth } from "../../contexts";
import UserInfoAvatar from "../UserInfo";
import { useNavigate } from "react-router-dom";

const DwarfTopNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <img src={CarIcon} alt="My Custom Icon" style={{ height: "40px" }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <UserInfoAvatar user={user} />
      </Toolbar>
      <Box
        sx={{ height: "4px", backgroundColor: theme.extraColors.detail }}
      ></Box>
    </AppBar>
  );
};

export default DwarfTopNav;
