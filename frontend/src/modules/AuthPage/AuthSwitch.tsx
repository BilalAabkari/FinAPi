import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const SwitchContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderColor: theme.palette.primary.light,
  borderStyle: "solid",
  position: "relative",
  borderRadius: 20,
  borderWidth: 1,
  overflow: "hidden", // Ensure switch doesn't overflow container
}));

const Label = styled(Box)({
  width: "50%",
  position: "absolute",
  height: "100%",
  cursor: "pointer",
});

const backgroundColor: string =
  "linear-gradient(90deg, rgba(191,128,0,1) 0%, rgba(228,154,3,1) 24%, rgba(255,200,87,1) 100%)";

type AuthType = "signup" | "login";

const AuthSwitch = () => {
  const [authType, setAuthType] = useState<AuthType>("login");

  return (
    <SwitchContainer>
      <Label
        sx={{
          left: 0,
          borderRight: "1px solid",
          background: authType === "login" ? backgroundColor : "unset",
        }}
        onClick={() => setAuthType("login")}
      >
        <Typography variant={"h5"} paddingTop={2}>
          Login
        </Typography>
      </Label>
      <Label
        sx={{
          right: 0,
          background: authType === "signup" ? backgroundColor : "unset",
        }}
        onClick={() => setAuthType("signup")}
      >
        <Typography variant={"h5"} paddingTop={2}>
          Signup
        </Typography>
      </Label>
    </SwitchContainer>
  );
};

export default AuthSwitch;
