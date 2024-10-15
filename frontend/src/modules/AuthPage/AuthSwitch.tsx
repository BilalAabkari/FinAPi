import { Box, Typography, useTheme } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

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

export type AuthType = "signup" | "login";

interface AuthSwitchProps {
  authType: string;
  onChange: (type: AuthType) => void;
}

const AuthSwitch = ({ authType, onChange }: AuthSwitchProps) => {
  const theme: Theme = useTheme();

  return (
    <SwitchContainer>
      <Label
        sx={{
          left: 0,
          borderRight: "1px solid",
          background:
            authType === "login" ? theme.gradients.detailInverted : "unset",
        }}
        onClick={() => onChange("login")}
      >
        <Typography variant={"body1"} paddingTop={1}>
          Login
        </Typography>
      </Label>
      <Label
        sx={{
          right: 0,
          background: authType === "signup" ? theme.gradients.detail : "unset",
        }}
        onClick={() => onChange("signup")}
      >
        <Typography variant={"body1"} paddingTop={1}>
          Signup
        </Typography>
      </Label>
    </SwitchContainer>
  );
};

export default AuthSwitch;
