import SignUpForm from "@modules/auth/SignUp/SignUpForm";
import type React from "react";
import useContainer from "./hook";
import SuccessAlert from "./SuccessAlert";

const SignUp: React.FC = () => {
  const { isSuccessful } = useContainer();

  return isSuccessful ? <SuccessAlert /> : <SignUpForm />;
};

export default SignUp;
