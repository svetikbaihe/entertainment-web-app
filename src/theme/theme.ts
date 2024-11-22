import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#fc4747",
		},
		background: {
			default: "#10141E",
			paper: "#161D2F",
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
		body1: {
			fontWeight: 300,
			fontSize: "0.94rem",
			letterSpacing: 0,
		},
		body2: {
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
					width: "100%",
					paddingTop: "11px",
					paddingBottom: "11px",
					borderRadius: "6px",
					":hover": {
						backgroundColor: "#FFF",
						color: "#161D2F",
					},
				},
			},
		},
	},
});
