import TwoColorBackground from "../../components/Backgrounds";
import { Paper, styled, Typography } from "@mui/material";

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
        <Typography>Signup</Typography>
      </CenteredFormPaper>
    </TwoColorBackground>
  );
};

export default AuthPage;
