import {
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  EmailInput,
  PasswordField,
  TextInput,
} from "../../components/FormInputs";
import { Theme } from "@mui/material/styles";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AuthFormsProps } from "./AuthFormsInterfaces.tsx";
import { UsersApi } from "../../API";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = ({ goToAuthType }: AuthFormsProps) => {
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const formMethods = useForm();
  const navigate = useNavigate();

  const [signupError, setSignupError] = useState<boolean>(false);
  const [signupMessage, setSignupMessage] = useState<string>("");

  const signupHandler: SubmitHandler<FieldValues> = (data) => {
    formMethods.clearErrors();

    UsersApi.signup({
      name: data.name,
      username: data.username,
      surname: data.surname,
      email: data.email,
      password: data.password,
    }).then((response) => {
      if (response.ok) {
        navigate("/");
      } else {
        response.json().then((body) => {
          setSignupMessage(body.details);
          setSignupError(true);
        });
      }
    });
  };

  return (
    <FormProvider {...formMethods}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {signupError && (
            <Typography textAlign={"start"} paddingBottom={1} color={"error"}>
              {signupMessage}
            </Typography>
          )}
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          <TextInput innerLabel={"Name"} name={"name"} />
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          <TextInput innerLabel={"Surname"} name={"surname"} />
        </Grid>
        <Grid item xs={12}>
          <TextInput innerLabel={"Username"} name={"username"} />
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
            onClick={formMethods.handleSubmit(signupHandler)}
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
