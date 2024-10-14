import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    extraColors: {
      detail: string;
    };
  }

  interface ThemeOptions {
    extraColors?: {
      detail?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#1B2021" },
    secondary: { main: "#E8EBF7" },
    background: { default: "#f5f5f5" },
  },
  extraColors: {
    detail: "#FFC857",
  },
});

export default theme;
