import { RoutesPath } from "@constants/routes";
import { dashboardActions } from "@modules/layouts/Dashboard";
import { clearStorage } from "@utils/localStorage";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleToggleLanguage = () => {
    dispatch(dashboardActions.toggleLanguage());
  };

  const handleLogOut = () => {
    clearStorage();

    navigate(generatePath(RoutesPath.LOGIN));
  };

  return { handleLogOut, handleToggleLanguage };
};

export default useContainer;
