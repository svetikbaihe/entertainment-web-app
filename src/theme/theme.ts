import { createTheme } from "@mui/material";

export const theme = createTheme({
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
});
