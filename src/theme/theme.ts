import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FC4747",
    },
    background: {
      default: "#10141E",
      paper: "#161D2F",
    },
    text: {
      primary: "#FFFFFF",
    },
    error: {
      main: "#FC4747",
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    allVariants: {
      color: "#FFFFFF",
    },
    h2: {
      fontWeight: 300,
      fontSize: "2rem",
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 300,
      fontSize: "1.5rem",
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.125rem",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 300,
      fontSize: "0.94rem",
      letterSpacing: 0,
      textTransform: "none",
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
          variants: [
            {
              props: {
                variant: "icon",
              },
              style: {
                color: "#5A698F",
                minWidth: 0,
                padding: 0,
                ":hover": {
                  color: "#FC4747",
                },
                ":active": {
                  color: "#FC4747",
                },
                "& .MuiButton-startIcon": {
                  margin: 0,
                },
              },
            },
          ],
          "&.MuiButton-contained": {
            paddingTop: "0.687rem",
            paddingBottom: "0.687rem",
            borderRadius: "6px",
            ":hover": {
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
          "&.MuiButton-text": {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            color: "#FFFFFF",
            borderRadius: "28.5px",
            minWidth: "7.3rem",
            paddingRight: "1.68rem",
            minHeight: "3rem",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ":hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "1px solid #FFF",
          },
          ":after": {
            borderBottom: "1px solid #FFFFFF",
          },
          fontWeight: 300,
          fontSize: "0.94rem",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiTextField-root:not(.Mui-error)": {
            borderBottom: "1px solid #5A698F",
          },
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
