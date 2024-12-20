import type React from "react";

import Form from "@components/Form";
import { Box, TextField } from "@mui/material";
import { inputsContainer } from "@styles/modules";

import useContainer from "./hook";
import { SignUpFormProps } from "./types";

const SignUp: React.FC<SignUpFormProps> = () => {
  const { intl } = useContainer();
  return (
    <Form
      title={intl.formatMessage({ id: "signUpForm.title" })}
      action="#"
      method="POST"
      buttonText={intl.formatMessage({ id: "signUpForm.buttonText" })}
      additionalText={intl.formatMessage({ id: "signUpForm.additionalText" })}
      linkText={intl.formatMessage({ id: "signUpForm.linkText" })}
      linkDestination="/login"
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
        <TextField
          id="repeat-password"
          type="password"
          name="user-repeat-password"
          variant="standard"
          placeholder={intl.formatMessage({
            id: "shared.form.placeholder.repeatPassword",
          })}
          fullWidth
          aria-label="Repeat Password"
        />
      </Box>
    </Form>
  );
};

export default SignUp;
