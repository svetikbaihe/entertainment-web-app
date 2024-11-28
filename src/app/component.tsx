import React, { StrictMode } from "react";

import Thumbnail from "@components/Thumbnail";
import { TABLET_QUERY } from "@constants/app";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme/theme";
import { useMediaQuery } from "react-responsive";

const App: React.FC = () => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY });
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container sx={{ margin: "20px auto" }}>
            <Thumbnail
              src={`/images/Thumnails/TheGreatLands/${isTablet ? "medium" : "small"}.jpg`}
              alt="The great lands"
              width={`${isTablet ? "220px" : "164px"}`}
              height={`${isTablet ? "140px" : "110px"}`}
            />
            <Thumbnail
              src={`/images/Thumnails/TheGreatLands/${isTablet ? "medium" : "small"}.jpg`}
              alt="The great lands"
              width={`${isTablet ? "220px" : "164px"}`}
              height={`${isTablet ? "140px" : "110px"}`}
              isHovered
            />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
