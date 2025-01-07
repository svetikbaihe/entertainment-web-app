import type React from "react";

import useResponsive from "@hooks/useMediaQuery";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Menu, useTheme } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";

import useContainer from "./hook";
import {
  accountMenu,
  accountMenuIcon,
  menuItem,
  accountMenuIconWrapper,
  accountMenuWrapper,
} from "./styles";
import { AccountMenuProps } from "./types";

const AccountMenu: React.FC<AccountMenuProps> = ({
  anchorEl,
  open,
  onClose,
}) => {
  const { isTablet } = useResponsive();

  const theme = useTheme();

  const { handleLogOut, handleToggleLanguage } = useContainer();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClick={onClose}
      onClose={onClose}
      sx={accountMenuWrapper}
      slotProps={{
        paper: {
          elevation: 0,
          sx: accountMenu(theme),
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      variant="menu"
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
      <MenuItem disableRipple onClick={handleLogOut} sx={menuItem(isTablet)}>
        <ListItemIcon sx={accountMenuIconWrapper}>
          <LogoutRoundedIcon fontSize="small" sx={accountMenuIcon} />
        </ListItemIcon>
        <ListItemText>{isTablet && "Log out"}</ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
