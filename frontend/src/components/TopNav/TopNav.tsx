import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import CarIcon from "../../assets/caricon.png";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <img src={CarIcon} alt="My Custom Icon" style={{ height: "100px" }} />
        </IconButton>
        <Typography variant={"h3"}>MechanIQ</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="inherit"
          sx={{ border: "1px solid  #ffffff" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Toolbar>
      <Box
        sx={{ height: "4px", backgroundColor: theme.extraColors.detail }}
      ></Box>
    </AppBar>
  );
};

export default TopNav;
