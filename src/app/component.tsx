import React, { StrictMode } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

import RoutesProvider from "./providers/Routes";
import ReduxProvider from "./providers/Store";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ReduxProvider>
            <RoutesProvider />
          </ReduxProvider>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
