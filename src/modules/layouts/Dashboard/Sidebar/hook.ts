import React from "react";

import { RoutesPath, RoutesKeys } from "@constants/routes";
import { useMatches, useNavigate } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const matches = useMatches();

  const isActiveHome = matches.at(-1)?.id === RoutesKeys.HOME;

  const isActiveMovies = matches.at(-1)?.id === RoutesKeys.MOVIES;

  const isActiveTVSeries = matches.at(-1)?.id === RoutesKeys.TV_SERIES;

  const isActiveBookmarked =
    matches.at(-1)?.id === RoutesKeys.BOOKMARKED_MOVIES;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToHome = () => {
    navigate(RoutesPath.HOME);
  };

  const handleToMovies = () => {
    navigate(RoutesPath.MOVIES);
  };

  const handleToTvSeries = () => {
    navigate(RoutesPath.TV_SERIES);
  };

  const handleToBookmarked = () => {
    navigate(RoutesPath.BOOKMARKED_MOVIES);
  };

  return {
    isActiveHome,
    isActiveMovies,
    isActiveTVSeries,
    isActiveBookmarked,
    anchorEl,
    open,

    handleToHome,
    handleToMovies,
    handleToTvSeries,
    handleToBookmarked,
    handleClick,
    handleClose,
  };
};

export default useContainer;
