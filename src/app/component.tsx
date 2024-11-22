import React, { StrictMode } from "react";

import { Button, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

const App: React.FC = () => {
	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Container sx={{ margin: "20px auto" }}>
						<Button variant="contained">Login to your account</Button>
					</Container>
				</CssBaseline>
			</ThemeProvider>
		</StrictMode>
	);
};

export default App;
