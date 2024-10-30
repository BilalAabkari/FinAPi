import { TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./InputInterfaces.tsx";
import FormInputLabel from "./FormInputLabel.tsx";

const EmailInput = ({ label, innerLabel, name }: FormInputProps) => {
  const { control } = useFormContext();

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Invalid email address";
    }
    return true;
  };

  return (
    <>
      {label && <FormInputLabel label={label} />}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          validate: validateEmail,
        }}
        render={({ field, fieldState }) => (
          <>
            {fieldState.error && (
              <Typography
                textAlign={"start"}
                color="error"
                variant="body2"
                sx={{ mb: 0.5, paddingBottom: 1 }}
              >
                {fieldState.error.message}
              </Typography>
            )}
            <TextField
              {...field}
              required
              label={innerLabel}
              error={!!fieldState.error}
              fullWidth
            />
          </>
        )}
      />
    </>
  );
};

export default EmailInput;
