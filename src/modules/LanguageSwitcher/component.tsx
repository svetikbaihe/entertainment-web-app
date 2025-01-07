import type React from "react";

import { Stack, Switch, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import useContainer from "./hook";

const LanguageSwitcher: React.FC = () => {
  const { isUKLanguage, handleChangeLanguage } = useContainer();

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography variant="caption">
        <FormattedMessage id="languageSwitcher.en" />
      </Typography>
      <Switch
        size="small"
        inputProps={{ "aria-label": "language switcher" }}
        onChange={handleChangeLanguage}
        checked={isUKLanguage}
      />
      <Typography variant="caption">
        <FormattedMessage id="languageSwitcher.uk" />
      </Typography>
    </Stack>
  );
};

export default LanguageSwitcher;
