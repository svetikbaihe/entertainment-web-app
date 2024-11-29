import React, { StrictMode } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

import RoutesProvider from "./providers/Routes";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RoutesProvider />
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
