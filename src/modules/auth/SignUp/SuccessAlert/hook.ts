import { useNavigate, generatePath } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpActions } from "@modules/auth/SignUp";
import { RoutesPath } from "@constants/routes";

const useContainer = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handleNavigateToLogin = () => {
    dispatch(signUpActions.clearSuccessfulState());
    
    navigate(generatePath(RoutesPath.LOGIN))
  }

  return {handleNavigateToLogin};
};

export default useContainer;