import TwoColorBackground from "../../components/Backgrounds";
import { Box, Paper, styled } from "@mui/material";
import AuthSwitch from "./AuthSwitch.tsx";

const CenteredFormPaper = styled(Paper)({
  width: "30%",
  height: "70%",
  position: "relative",
  margin: "0 auto",
  top: "10%",
});

const AuthPage = () => {
  return (
    <TwoColorBackground>
      <CenteredFormPaper elevation={3}>
        <Box sx={{ width: "80%", height: 70, margin: "0 auto", paddingTop: 6 }}>
          <AuthSwitch />
        </Box>
      </CenteredFormPaper>
    </TwoColorBackground>
  );
};

export default AuthPage;
