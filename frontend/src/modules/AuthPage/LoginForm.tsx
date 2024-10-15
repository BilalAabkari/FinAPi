import { Button, Grid, Link, useTheme } from "@mui/material";
import { EmailInput, PasswordField } from "../../components/FormInputs";
import { Theme } from "@mui/material/styles";
import { FormProvider, useForm } from "react-hook-form";
import { AuthFormsProps } from "./AuthFormsInterfaces.tsx";

const LoginForm = ({ goToAuthType }: AuthFormsProps) => {
  const theme: Theme = useTheme();
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EmailInput innerLabel={"Email address"} name={"email"} />
        </Grid>
        <Grid item xs={12}>
          <PasswordField innerLabel={"Password"} name={"password"} />
        </Grid>
        <Grid item xs={12}>
          <Link target="_blank" rel="noopener noreferrer">
            Forgot password?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              height: 50,
              width: "100%",
              background: theme.gradients.detail,
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          {"Not a member? "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => goToAuthType("signup")}
            sx={{ cursor: "pointer" }}
          >
            Sign Up!
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default LoginForm;
