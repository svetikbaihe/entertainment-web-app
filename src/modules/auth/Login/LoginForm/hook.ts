import { LocalStorageKeys, UserRoles } from "@constants/app";
import { RoutesPath } from "@constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSelectors } from "@modules/auth/SignUp";
import { setItem } from "@utils/localStorage";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import { SCHEMA } from "./constants";
import { FormValues } from "./types";

const useContainer = () => {
  const intl = useIntl();

  const navigate = useNavigate();

  const users = useSelector(signUpSelectors.usersSelector);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SCHEMA),
  });

  const onSubmit = (data: FormValues) => {
    const isRegistered = users.some(
      user => user.email === data.email && user.password === data.password
    );

    if (isRegistered) {
      setItem(LocalStorageKeys.ROLE, UserRoles.USER);

      navigate(generatePath(RoutesPath.HOME));
    }
  };

  return { intl, control, errors, handleSubmit, onSubmit };
};

export default useContainer;
