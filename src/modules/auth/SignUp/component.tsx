import type React from "react";

import SignUpForm from "@modules/auth/SignUp/SignUpForm";

import useContainer from "./hook";
import SuccessAlert from "./SuccessAlert";

const SignUp: React.FC = () => {
  const { isSuccessful } = useContainer();

  return isSuccessful ? <SuccessAlert /> : <SignUpForm />;
};

export default SignUp;
