import { Typography } from "@mui/material";

interface FormLabelProps {
  label: string;
}

const FormInputLabel = ({ label }: FormLabelProps) => {
  return (
    <Typography align={"left"} variant={"body1"} paddingBottom={1.5}>
      {label}
    </Typography>
  );
};

export default FormInputLabel;
