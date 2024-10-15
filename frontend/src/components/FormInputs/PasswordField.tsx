import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
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
        render={({ field }) => (
          <TextField
            {...field}
            label={innerLabel}
            fullWidth
            type={"password"}
            required
          />
        )}
      />
    </>
  );
};

export default PasswordField;
