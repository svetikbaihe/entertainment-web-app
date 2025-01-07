import { signUpSelectors } from "@modules/auth/SignUp";
import { useSelector } from "react-redux";

const useContainer = () => {
  const isSuccessful = useSelector(signUpSelectors.isSuccessfulSelector);

  return { isSuccessful };
};

export default useContainer;
