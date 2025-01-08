import React from "react";

import { RoutesPath } from "@constants/routes";
import { dashboardActions } from "@modules/layouts/Dashboard";
import { clearStorage } from "@utils/localStorage";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleCloseMenu = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleToggleLanguage = () => {
    dispatch(dashboardActions.toggleLanguage());
  };

  const handleLogOut = () => {
    clearStorage();

    navigate(generatePath(RoutesPath.LOGIN));
  };

  return {
    anchorRef,
    open,

    handleLogOut,
    handleToggleLanguage,
    handleToggleMenu,
    handleCloseMenu,
    handleListKeyDown,
  };
};

export default useContainer;
