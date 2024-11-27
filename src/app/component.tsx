import React, { StrictMode } from "react";

import BookmarkIcon from "@components/BookmarkIcon";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container sx={{ margin: "20px auto" }}>
            <BookmarkIcon />
            <BookmarkIcon />
            <BookmarkIcon />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
