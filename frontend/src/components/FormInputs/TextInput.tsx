import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./InputInterfaces.tsx";
import FormInputLabel from "./FormInputLabel.tsx";

const TextInput = ({ label, innerLabel, name }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label && label && <FormInputLabel label={label} />}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} required label={innerLabel} fullWidth />
        )}
      />
    </>
  );
};

export default TextInput;
