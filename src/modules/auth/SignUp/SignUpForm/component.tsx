import type React from "react";

import Form from "@components/Form";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { inputsContainer } from "@styles/modules";
import { Controller } from "react-hook-form";

import useContainer from "./hook";
import FormattedOrRawMessage from "@elements/FormattedOrRawMessage";
import { RoutesPath } from "@constants/routes";
import LanguageSwitcher from "@modules/LanguageSwitcher";

const SignUpForm: React.FC = () => {
  const { intl, control, errors, handleSubmit, onSubmit } = useContainer();
  return (
    <Form
      title={intl.formatMessage({ id: "signUpForm.title" })}
      action="#"
      method="POST"
      buttonText={intl.formatMessage({ id: "signUpForm.buttonText" })}
      additionalText={intl.formatMessage({ id: "signUpForm.additionalText" })}
      linkText={intl.formatMessage({ id: "signUpForm.linkText" })}
      linkDestination={RoutesPath.LOGIN}
      onClick={handleSubmit(onSubmit)}
      endComponent={<LanguageSwitcher />}
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
              {...field}
              slotProps={{
                input: {
                  endAdornment: errors.email ? (
                    <InputAdornment position="end">
                      <Typography variant="errorText">
                        <FormattedOrRawMessage
                          message={errors.email?.message ?? ""}
                        />
                      </Typography>
                    </InputAdornment>
                  ) : null,
                },
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.password ? true : false}
              id="password"
              type="password"
              variant="standard"
              placeholder={intl.formatMessage({
                id: "shared.form.placeholder.password",
              })}
              fullWidth
              aria-label="Password"
              {...field}
              slotProps={{
                input: {
                  endAdornment: errors.password ? (
                    <InputAdornment position="end">
                      <Typography variant="errorText">
                        <FormattedOrRawMessage
                          message={errors.password.message ?? ""}
                        />
                      </Typography>
                    </InputAdornment>
                  ) : null,
                },
              }}
            />
          )}
        />

        <Controller
          name="repeatPassword"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.repeatPassword ? true : false}
              id="repeat-password"
              type="password"
              variant="standard"
              placeholder={intl.formatMessage({
                id: "shared.form.placeholder.repeatPassword",
              })}
              fullWidth
              aria-label="Repeat Password"
              {...field}
              slotProps={{
                input: {
                  endAdornment: errors.repeatPassword ? (
                    <InputAdornment position="end">
                      <Typography variant="errorText">
                        <FormattedOrRawMessage
                          message={errors.repeatPassword.message ?? ""}
                        />
                      </Typography>
                    </InputAdornment>
                  ) : null,
                },
              }}
            />
          )}
        />
      </Box>
    </Form>
  );
};

export default SignUpForm;
