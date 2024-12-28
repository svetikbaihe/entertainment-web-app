import type React from "react";

import Form from "@components/Form";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { inputsContainer } from "@styles/modules";
import { Controller } from "react-hook-form";

import useContainer from "./hook";
import { LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = () => {
  const { intl, control, errors, handleSubmit, onSubmit } = useContainer();

  return (
    <Form
      title={intl.formatMessage({ id: "loginForm.title" })}
      action="#"
      method="POST"
      buttonText={intl.formatMessage({ id: "loginForm.buttonText" })}
      additionalText={intl.formatMessage({ id: "loginForm.additionalText" })}
      linkText={intl.formatMessage({ id: "loginForm.linkText" })}
      linkDestination="/sign_up"
      onClick={handleSubmit(onSubmit)}
    >
      <Box sx={inputsContainer}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.email ? true : false}
              id="mail"
              type="email"
              variant="standard"
              placeholder={intl.formatMessage({
                id: "shared.form.placeholder.email",
              })}
              fullWidth
              aria-label="Email"
              slotProps={{
                input: {
                  endAdornment: errors.email ? (
                    <InputAdornment position="end">
                      <Typography variant="errorText">
                        {errors.email?.message}
                      </Typography>
                    </InputAdornment>
                  ) : null,
                },
              }}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.email ? true : false}
              id="password"
              type="password"
              variant="standard"
              placeholder={intl.formatMessage({
                id: "shared.form.placeholder.password",
              })}
              fullWidth
              aria-label="Password"
              slotProps={{
                input: {
                  endAdornment: errors.password ? (
                    <InputAdornment position="end">
                      <Typography variant="errorText">
                        {errors.password?.message}
                      </Typography>
                    </InputAdornment>
                  ) : null,
                },
              }}
              {...field}
            />
          )}
        />
      </Box>
    </Form>
  );
};

export default LoginForm;
