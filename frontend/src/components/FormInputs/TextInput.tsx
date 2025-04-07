import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./InputInterfaces.tsx";
import FormInputLabel from "./FormInputLabel.tsx";

const TextInput = ({
    label,
    innerLabel,
    size,
    multiline = false,
    required = false,
    fullWidth,
    defaultValue,
    variant,
    select,
    name,
    children,
}: FormInputProps) => {
    const { control } = useFormContext();

    return (
        <>
            {label && label && <FormInputLabel label={label} />}
            <Controller
                name={name}
                control={control}
                defaultValue=""
                rules={{
                    required: required
                        ? `${innerLabel || label} is required`
                        : false,
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        required={required}
                        label={innerLabel}
                        multiline={multiline}
                        fullWidth={fullWidth}
                        defaultValue={defaultValue}
                        variant={variant}
                        size={size}
                        select={select}
                        error={!!fieldState.error}
                    >
                        {children}
                    </TextField>
                )}
            />
        </>
    );
};

export default TextInput;
