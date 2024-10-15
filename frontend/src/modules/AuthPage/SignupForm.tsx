import { Button, Grid, Link, useTheme } from "@mui/material";
import { EmailInput, PasswordField } from "../../components/FormInputs";
import { Theme } from "@mui/material/styles";
import { FormProvider, useForm } from "react-hook-form";
import { AuthFormsProps } from "./AuthFormsInterfaces.tsx";

const SignupForm = ({ goToAuthType }: AuthFormsProps) => {
  const theme: Theme = useTheme();
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <EmailInput innerLabel={"Name"} name={"name"} />
        </Grid>
        <Grid item xs={6}>
          <EmailInput innerLabel={"Surname"} name={"surname"} />
        </Grid>
        <Grid item xs={12}>
          <EmailInput innerLabel={"Email address"} name={"email"} />
        </Grid>
        <Grid item xs={12}>
          <PasswordField innerLabel={"Password"} name={"password"} />
        </Grid>
        <Grid item xs={12}>
          <PasswordField
            innerLabel={"Confirm your password"}
            name={"confirmPassword"}
          />
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
            SignUp
          </Button>
        </Grid>
        <Grid item xs={12}>
          {"Already logged in? "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => goToAuthType("login")}
            sx={{ cursor: "pointer" }}
          >
            Login Here
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SignupForm;
