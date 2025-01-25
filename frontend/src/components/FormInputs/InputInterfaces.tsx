import { TextFieldVariants } from "@mui/material/TextField/TextField";
import { ReactNode } from "react";

export interface FormInputProps {
    label?: string;
    innerLabel: string;
    name: string;
    required?: boolean;
    multiline?: boolean;
    fullWidth?: boolean;
    select?: boolean;
    size?: "small" | "medium";
    defaultValue?: unknown;
    variant?: TextFieldVariants;
    children?: ReactNode;
}
