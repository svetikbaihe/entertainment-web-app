import type React from "react";

import { Bookmark, LocalMovies, Tv } from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";
import { AppBar, Avatar, Box, Button } from "@mui/material";

import useContainer from "./hook";
import {
  avatar,
  btnContainer,
  sidebar,
  sidebarBtn,
  sidebarLogo,
} from "./styles";
import { SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = ({ avatarSrc }) => {
  const { handleToBookmarked, handleToHome, handleToMovies, handleToTvSeries } =
    useContainer();
  return (
    <AppBar component="aside" position="sticky" sx={sidebar}>
      <Box component="img" src="/icons/logo.svg" alt="Logo" sx={sidebarLogo} />

      <Box sx={btnContainer}>
        <Button
          variant="icon"
          startIcon={<WindowIcon />}
          disableRipple
          onClick={handleToHome}
          sx={sidebarBtn}
        />

        <Button
          variant="icon"
          startIcon={<LocalMovies />}
          disableRipple
          onClick={handleToMovies}
          sx={sidebarBtn}
        />

        <Button
          variant="icon"
          startIcon={<Tv />}
          disableRipple
          onClick={handleToTvSeries}
          sx={sidebarBtn}
        />

        <Button
          variant="icon"
          startIcon={<Bookmark />}
          disableRipple
          onClick={handleToBookmarked}
          sx={sidebarBtn}
        />
      </Box>

      <Avatar alt="Your avatar" src={avatarSrc} sx={avatar} />
    </AppBar>
  );
};

export default Sidebar;
