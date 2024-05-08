import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "black",
      paper: "#111111",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontFamily: "Jura, sans-serif",
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Jura, sans-serif",
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Jura, sans-serif",
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Michroma, sans-serif",
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
});

export default theme;
