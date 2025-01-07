import { RoutesPath } from "@constants/routes";
import { signUpActions } from "@modules/auth/SignUp";
import { useDispatch } from "react-redux";
import { useNavigate, generatePath } from "react-router-dom";

const useContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleNavigateToLogin = () => {
    dispatch(signUpActions.clearSuccessfulState());

    navigate(generatePath(RoutesPath.LOGIN));
  };

  return { handleNavigateToLogin };
};

export default useContainer;
