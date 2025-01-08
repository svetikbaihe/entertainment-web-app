import type React from "react";

import AccountMenu from "@modules/AccountMenu";
import { Bookmark, LocalMovies, Tv } from "@mui/icons-material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AppBar, Box, Button } from "@mui/material";

import useContainer from "./hook";
import {
  btnContainer,
  sidebar,
  sidebarBtn,
  sidebarLogo,
  activePageBtn,
} from "./styles";

const Sidebar: React.FC = () => {
  const {
    isActiveBookmarked,
    isActiveHome,
    isActiveMovies,
    isActiveTVSeries,

    handleToBookmarked,
    handleToHome,
    handleToMovies,
    handleToTvSeries,
  } = useContainer();
  return (
    <AppBar component="aside" position="sticky" sx={sidebar}>
      <Box component="img" src="/icons/logo.svg" alt="Logo" sx={sidebarLogo} />

      <Box sx={btnContainer}>
        <Button
          variant="icon"
          startIcon={<GridViewRoundedIcon />}
          disableRipple
          onClick={handleToHome}
          sx={[sidebarBtn, isActiveHome && activePageBtn]}
        />

        <Button
          variant="icon"
          startIcon={<LocalMovies />}
          disableRipple
          onClick={handleToMovies}
          sx={[sidebarBtn, isActiveMovies && activePageBtn]}
        />

        <Button
          variant="icon"
          startIcon={<Tv />}
          disableRipple
          onClick={handleToTvSeries}
          sx={[sidebarBtn, isActiveTVSeries && activePageBtn]}
        />

        <Button
          variant="icon"
          startIcon={<Bookmark />}
          disableRipple
          onClick={handleToBookmarked}
          sx={[sidebarBtn, isActiveBookmarked && activePageBtn]}
        />
      </Box>

      <AccountMenu avatarSrc="/images/image-avatar.png" avatarAlt="John Wons" />
    </AppBar>
  );
};

export default Sidebar;
