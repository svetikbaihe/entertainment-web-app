import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import * as yup from "yup";

import { FormValues } from "./types";

const useContainer = () => {
  const intl = useIntl();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Invalid email address")
        .required("Can't be empty"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password cannot exceed 20 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[@$!%*?&]/,
          "Password must contain at least one special character"
        )
        .trim()
        .required("Can't be empty"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Can't be empty"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return { intl, control, errors, handleSubmit, onSubmit };
};

export default useContainer;
