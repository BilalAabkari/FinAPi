import TwoColorBackground from "../../components/Backgrounds";
import { Box, Paper, styled, Typography } from "@mui/material";
import AuthSwitch, { AuthType } from "./AuthSwitch.tsx";

import LoginForm from "./LoginForm.tsx";
import { useState } from "react";
import SignupForm from "./SignupForm.tsx";

const CenteredFormPaper = styled(Paper)({
  width: "30%",
  height: "70%",
  position: "relative",
  margin: "0 auto",
  top: "10%",
});

const AuthPage = () => {
  const [authType, setAuthType] = useState<AuthType>("login");

  const goToAuthType = (type: AuthType) => {
    setAuthType(type);
  };

  return (
    <TwoColorBackground>
      <CenteredFormPaper elevation={3}>
        <Typography variant={"h4"} paddingTop={3}>
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
