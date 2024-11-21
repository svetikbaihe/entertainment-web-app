import React, { StrictMode } from "react";

import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "@theme/theme";

const App: React.FC = () => {
	return (
		<StrictMode>
			<CssBaseline>
				<ThemeProvider theme={theme}>
					<Typography variant="h1">Lorem ipsum dolor sit amet</Typography>
					<Typography variant="h2">Consectetuer adipiscing elit</Typography>
					<Typography variant="h3">Donec odio quisque volutpat mattis eros</Typography>
					<Typography variant="h4">Nullam malesuada erat ut turpis</Typography>
					<Typography variant="body1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</Typography>
					<Typography variant="body2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</Typography>
				</ThemeProvider>
			</CssBaseline>
		</StrictMode>
	);
};

export default App;
