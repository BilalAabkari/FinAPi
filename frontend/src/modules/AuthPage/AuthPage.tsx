import TwoColorBackground from "../../components/Backgrounds";
import {
  Box,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AuthSwitch, { AuthType } from "./AuthSwitch.tsx";

import LoginForm from "./LoginForm.tsx";
import { useState } from "react";
import SignupForm from "./SignupForm.tsx";
import { Theme } from "@mui/material/styles";

interface CenteredFormPaperProps {
  isSmallScreen: boolean;
}

const CenteredFormPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isSmallScreen",
})(({ isSmallScreen }: CenteredFormPaperProps) => ({
  width: isSmallScreen ? "80%" : "30%",
  position: "relative",
  margin: "0 auto",
  top: "10%",
}));

const AuthPage = () => {
  const [authType, setAuthType] = useState<AuthType>("login");
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));

  const goToAuthType = (type: AuthType) => {
    setAuthType(type);
  };

  return (
    <TwoColorBackground>
      <CenteredFormPaper elevation={3} isSmallScreen={isSmallScreen}>
        <Typography variant={"h4"} paddingTop={3} textAlign={"center"}>
          Welcome
        </Typography>
        <Box sx={{ width: "60%", height: 40, margin: "0 auto", paddingTop: 4 }}>
          <AuthSwitch
            authType={authType}
            onChange={(type: AuthType) => setAuthType(type)}
          />
        </Box>
        <Box sx={{ padding: 6 }}>
          {authType === "login" ? (
            <LoginForm goToAuthType={goToAuthType} />
          ) : (
            <SignupForm goToAuthType={goToAuthType} />
          )}
        </Box>
      </CenteredFormPaper>
    </TwoColorBackground>
  );
};

export default AuthPage;
