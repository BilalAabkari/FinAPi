import {
  Avatar,
  Button,
  Divider,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { UserInfo } from "../../API";
import { forwardRef, MouseEventHandler } from "react";
import BrokenImage from "../../assets/broken-image.png";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";

interface UserMenuProps {
  show: boolean;
  user: UserInfo | null;
  ref: HTMLDivElement | null;
}

interface StyledPaperProps {
  isMobile: boolean;
}

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})(({ isMobile }: StyledPaperProps) => ({
  position: "absolute",
  width: isMobile ? "92vw" : "260px",
  right: 0,
  height: "400px",
}));

type Option = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const UserMenu = forwardRef<HTMLDivElement, UserMenuProps>(
  ({ user, show }, ref) => {
    const { logout } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();

    const options: Option[] = [
      {
        text: "Logout",
        onClick: () =>
          logout &&
          logout().then((response) => {
            if (response.ok) window.location.reload();
          }),
      },
      {
        text: "Management",
        onClick: () => navigate("/management"),
      },
    ];

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
      user &&
      show && (
        <StyledPaper isMobile={isMobile} ref={ref} elevation={3}>
          <Avatar
            src={BrokenImage}
            sx={{
              height: "70px",
              width: "70px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Divider
            color={theme.extraColors.detail}
            sx={{ marginTop: 2, height: "1px" }}
          ></Divider>
          <Typography variant={"h6"} marginTop={0} textAlign={"center"}>
            {user.username}
          </Typography>
          <Typography variant={"body2"} textAlign={"center"}>
            {user.email}
          </Typography>
          <Divider
            color={theme.extraColors.detail}
            sx={{ marginTop: 1, height: "1px" }}
          ></Divider>
          {options.map((option) => (
            <Button
              onClick={option.onClick}
              key={option.text}
              sx={{ width: "100%" }}
            >
              {option.text}
            </Button>
          ))}
        </StyledPaper>
      )
    );
  },
);

export default UserMenu;
