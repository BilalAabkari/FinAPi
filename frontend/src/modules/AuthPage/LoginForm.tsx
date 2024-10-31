import { Button, Grid, Link, Typography, useTheme } from "@mui/material";
import { EmailInput, PasswordField } from "../../components/FormInputs";
import { Theme } from "@mui/material/styles";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AuthFormsProps } from "./AuthFormsInterfaces.tsx";
import { useAuth } from "../../contexts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ goToAuthType }: AuthFormsProps) => {
  const theme: Theme = useTheme();
  const formMethods = useForm();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);

  const identifier = formMethods.watch("identifier");
  const password = formMethods.watch("password");

  useEffect(() => {
    setError(false);
  }, [identifier, password, formMethods]);

  const handleSignup: SubmitHandler<FieldValues> = (data) => {
    formMethods.clearErrors();
    authContext
      ?.login({
        username: data.identifier,
        password: data.password,
      })
      .then((success) => {
        if (success) {
          setError(false);
          formMethods.clearErrors();
          navigate("/");
        } else {
          setError(true);
          formMethods.setError("identifier", { type: "custom" });
          formMethods.setError("password", { type: "custom" });
        }
      });
  };

  return (
    <FormProvider {...formMethods}>
      {error && (
        <Typography textAlign={"start"} paddingBottom={1} color={"error"}>
          Incorrect password or email
        </Typography>
      )}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EmailInput
            innerLabel={"Email address or username"}
            name={"identifier"}
          />
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
            onClick={formMethods.handleSubmit(handleSignup)}
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
