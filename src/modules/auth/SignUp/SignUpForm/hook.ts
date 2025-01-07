import { yupResolver } from "@hookform/resolvers/yup";
import { signUpActions } from "@modules/auth/SignUp";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

import { SCHEMA } from "./constants";
import { FormValues } from "./types";

const useContainer = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(SCHEMA),
  });

  const onSubmit = (data: FormValues) => {
    dispatch(
      signUpActions.addUser({
        email: data.email,
        password: data.repeatPassword,
      })
    );

    dispatch(signUpActions.setIsSuccessful(true));

    reset();
  };

  return { intl, control, errors, handleSubmit, onSubmit };
};

export default useContainer;
