import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CarIcon from "../../assets/caricon.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useEffect, useState } from "react";
import UserInfoAvatar from "../UserInfo";

const TopNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, checkSession } = useAuth();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    checkSession().then((isLogged) => setIsLogged(isLogged));
  }, [checkSession]);

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
          <img
            src={CarIcon}
            alt="My Custom Icon"
            style={{ height: isMobile ? "40px" : "100px" }}
          />
        </IconButton>
        <Typography variant={"h3"} fontSize={isMobile ? "30px" : "40px"}>
          MechanIQ
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {isLogged ? (
          <UserInfoAvatar user={user} />
        ) : (
          <Button
            color="inherit"
            sx={{ border: "1px solid  #ffffff" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
      </Toolbar>
      <Box
        sx={{ height: "4px", backgroundColor: theme.extraColors.detail }}
      ></Box>
    </AppBar>
  );
};

export default TopNav;
