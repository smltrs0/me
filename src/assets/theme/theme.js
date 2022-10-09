import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: "#1A1A1A ",
            paper:"#b268dd"
        },
        primary: {
            main: "#b268dd",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ffdd40",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "#828282",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    logoColor:"#fff",
    ...baseTheme
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: "#DFDDF8",
        },
        primary: {
            main: "#7068DE",
            contrastText: "#000",
        },
        secondary: {
            main: "#ebbf68",
            contrastText: "rgb(230,230,230)",
        },
        text: {
            primary: "#000",
            secondary: "rgb(30,30,30)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: {
        bg : "#6F4C5B",
        text: "rgb(230,230,230) "
    },
    logoColor:"#6F4C5B",
    ...baseTheme
});

export { darkTheme, lightTheme };
