import React, { StrictMode } from "react";

import InputSearch from "@components";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container sx={{ margin: "20px auto" }}>
            <InputSearch />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
