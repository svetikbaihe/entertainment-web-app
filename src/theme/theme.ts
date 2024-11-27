import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FC4747",
    },
    background: {
      //default color to be changed back to "#10141E" after approving
      default: "#F8E6C3",
      paper: "#161D2F",
    },
    text: {
      primary: "#FFFFFF",
    },
    error: {
      main: "#FC4747",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    allVariants: {
      color: "#FFFFFF",
    },
    h1: {
      fontWeight: 300,
      fontSize: "2rem",
      letterSpacing: "-0.03em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "1.5rem",
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1rem",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 300,
      fontSize: "0.94rem",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 300,
      fontSize: "0.8rem",
      letterSpacing: 0,
    },
    button: {
      textTransform: "none",
      fontWeight: 300,
      fontSize: "0.94rem",
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            paddingTop: "0.687rem",
            paddingBottom: "0.687rem",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: "#FFF",
              color: "#161D2F",
            },
          },
          "&.MuiButton-outlined": {
            backgroundColor: "#10141E",
            opacity: "50%",
            borderRadius: "50%",
            borderColor: "#10141E",
            width: "2rem",
            height: "2rem",
            minWidth: 0,
            ":hover": {
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ".MuiInput:not(.Mui-error)": {
            borderBottom: "1px solid #5A698F",
          },
          ":hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "1px solid #FFF",
          },
          ":after": {
            borderBottom: "1px solid #FFFFFF",
          },
        },
        input: {
          caretColor: "#FC4747",
          cursor: "pointer",
          paddingLeft: "1rem",
          paddingBottom: "1rem",
          paddingTop: "1.5rem",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          paddingTop: "0.687rem",
        },
      },
    },
  },
});
