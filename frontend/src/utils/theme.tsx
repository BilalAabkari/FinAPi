import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    extraColors: {
      detail: string;
    };
    gradients: {
      detail: string;
      detailInverted: string;
    };
  }

  interface ThemeOptions {
    extraColors?: {
      detail?: string;
    };

    gradients?: {
      detail?: string;
      detailInverted?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#1B2021", light: "#9f9f9f" },
    secondary: { main: "#E8EBF7" },
    background: { default: "#f5f5f5" },
  },
  extraColors: {
    detail: "#FFC857",
  },
  gradients: {
    detail:
      "linear-gradient(90deg, rgba(191,128,0,1) 0%, rgba(228,154,3,1) 24%, rgba(255,200,87,1) 100%)",
    detailInverted:
      "linear-gradient(90deg, rgba(255,200,87,1) 0%, rgba(228,154,3,1) 76%, rgba(191,128,0,1) 100%)",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});

export default theme;
