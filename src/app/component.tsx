import React, { StrictMode } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

import LocalizationProvider from "./providers/Localization";
import RoutesProvider from "./providers/Routes";
import ReduxProvider from "./providers/Store";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ReduxProvider>
            <LocalizationProvider>
              <RoutesProvider />
            </LocalizationProvider>
          </ReduxProvider>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
