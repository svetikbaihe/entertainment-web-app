import React, { StrictMode } from "react";

import Input from "@elements/Input";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

const App: React.FC = () => {
	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Container sx={{ margin: "20px auto" }}>
						<Input
							error
							helperText="Can't be empty"
							type="email"
							placeholder="Email address"
						/>
						<Input
							helperText="Can't be empty"
							type="password"
							placeholder="Password"
						/>
						<Input
							helperText="Can't be empty"
							type="password"
							placeholder="Repeat Password"
						/>
					</Container>
				</CssBaseline>
			</ThemeProvider>
		</StrictMode>
	);
};

export default App;
