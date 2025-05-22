import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0043ce", // IBM blue
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
});

export default theme;
