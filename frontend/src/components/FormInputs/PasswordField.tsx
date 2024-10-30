import { Controller, useFormContext } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { FormInputProps } from "./InputInterfaces.tsx";
import FormInputLabel from "./FormInputLabel.tsx";

const PasswordField = ({ label, innerLabel, name }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label && label && <FormInputLabel label={label} />}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field, fieldState }) => (
          <>
            {fieldState.error && (
              <Typography
                textAlign={"start"}
                color="error"
                variant="body2"
                sx={{ mb: 0.5 }}
              >
                {fieldState.error.message}
              </Typography>
            )}
            <TextField
              {...field}
              label={innerLabel}
              fullWidth
              error={!!fieldState.error}
              type={"password"}
              required
            />
          </>
        )}
      />
    </>
  );
};

export default PasswordField;
