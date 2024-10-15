import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./InputInterfaces.tsx";
import FormInputLabel from "./FormInputLabel.tsx";

const EmailInput = ({ label, innerLabel, name }: FormInputProps) => {
  const { control, setError, clearErrors } = useFormContext();

  const validateEmail = (value: string) => {
    if (!value) {
      setError(name, { type: "custom", message: "Email is required" });
      return value;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      setError(name, { type: "custom", message: "Invalid email address" });
    } else {
      clearErrors(name);
    }
    return value;
  };

  return (
    <>
      {label && <FormInputLabel label={label} />}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            required
            label={innerLabel}
            error={!!fieldState.error}
            fullWidth
            onBlur={() => validateEmail(field.value)}
          />
        )}
      />
    </>
  );
};

export default EmailInput;
