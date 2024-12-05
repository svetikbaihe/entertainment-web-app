import type React from "react";

import { Bookmark, LocalMovies, Tv } from "@mui/icons-material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AppBar, Avatar, Box, Button } from "@mui/material";

import useContainer from "./hook";
import {
  avatar,
  btnContainer,
  sidebar,
  sidebarBtn,
  sidebarLogo,
  activePageBtn,
} from "./styles";
import { SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = ({ avatarSrc }) => {
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

      <Avatar alt="Your avatar" src={avatarSrc} sx={avatar} />
    </AppBar>
  );
};

export default Sidebar;
