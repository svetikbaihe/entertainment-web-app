import type React from "react";

import AccountMenu from "@modules/AccountMenu";
import { Bookmark, LocalMovies, Tv } from "@mui/icons-material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AppBar, Avatar, Box, Button, IconButton } from "@mui/material";

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

const Sidebar: React.FC<SidebarProps> = ({ avatarSrc, avatarAlt }) => {
  const {
    isActiveBookmarked,
    isActiveHome,
    isActiveMovies,
    isActiveTVSeries,
    anchorEl,
    open,

    handleToBookmarked,
    handleToHome,
    handleToMovies,
    handleToTvSeries,
    handleClick,
    handleClose,
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

      <Box sx={{ position: "relative" }}>
        <IconButton onClick={handleClick}>
          <Avatar alt={avatarAlt} src={avatarSrc} sx={avatar} />
        </IconButton>

        <AccountMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
      </Box>
    </AppBar>
  );
};

export default Sidebar;
