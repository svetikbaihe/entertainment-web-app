import type React from "react";

import Form from "@components/Form";
import { Box, TextField } from "@mui/material";
import { inputsContainer } from "@styles/modules";

import useContainer from "./hook";
import { LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = () => {
  const { intl } = useContainer();

  return (
    <Form
      title={intl.formatMessage({ id: "loginForm.title" })}
      action="#"
      method="POST"
      buttonText={intl.formatMessage({ id: "loginForm.buttonText" })}
      additionalText={intl.formatMessage({ id: "loginForm.additionalText" })}
      linkText={intl.formatMessage({ id: "loginForm.linkText" })}
      linkDestination="/sign_up"
    >
      <Box sx={inputsContainer}>
        <TextField
          id="mail"
          type="email"
          name="mail"
          variant="standard"
          placeholder={intl.formatMessage({
            id: "shared.form.placeholder.email",
          })}
          fullWidth
          aria-label="Email"
        />
        <TextField
          id="password"
          type="password"
          name="user-password"
          variant="standard"
          placeholder={intl.formatMessage({
            id: "shared.form.placeholder.password",
          })}
          fullWidth
          aria-label="Password"
        />
      </Box>
    </Form>
  );
};

export default LoginForm;
