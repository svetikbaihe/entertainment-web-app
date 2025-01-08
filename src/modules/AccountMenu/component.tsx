import * as React from "react";

import useResponsive from "@hooks/useMediaQuery";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { theme } from "@theme/theme";

import useContainer from "./hook";
import {
  accountMenu,
  accountMenuIcon,
  accountMenuIconWrapper,
  avatar,
  menuItem,
} from "./styles";
import { AccountMenuProps } from "./types";


const AccountMenu: React.FC<AccountMenuProps> = ({ avatarAlt, avatarSrc }) => {
  const { isTablet } = useResponsive();

  const {
    anchorRef,
    open,
    handleLogOut,
    handleToggleLanguage,
    handleCloseMenu,
    handleListKeyDown,
    handleToggleMenu,
  } = useContainer();

  return (
    <Box>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggleMenu}
      >
        <Avatar alt={avatarAlt} src={avatarSrc} sx={avatar} />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={accountMenu(theme, placement)}>
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    disableRipple
                    onClick={handleToggleLanguage}
                    sx={menuItem(isTablet)}
                  >
                    <ListItemIcon sx={accountMenuIconWrapper}>
                      <LanguageIcon fontSize="small" sx={accountMenuIcon} />
                    </ListItemIcon>
                    <ListItemText>{isTablet && "EN | UA"}</ListItemText>
                  </MenuItem>
                  <MenuItem
                    disableRipple
                    onClick={handleLogOut}
                    sx={menuItem(isTablet)}
                  >
                    <ListItemIcon sx={accountMenuIconWrapper}>
                      <LogoutRoundedIcon
                        fontSize="small"
                        sx={accountMenuIcon}
                      />
                    </ListItemIcon>
                    <ListItemText>{isTablet && "Log out"}</ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default AccountMenu;
