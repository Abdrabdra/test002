import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
    palette: {
        primary: {
            main: "#8A3FFC",
        },
        secondary: {
            main: "#000",
        }
    },
    typography: {
        fontFamily: "Proxima Nova",
    },
});

const theme = responsiveFontSizes(base)

export default theme;
