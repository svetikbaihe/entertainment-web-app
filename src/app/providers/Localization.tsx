import type React from "react";

import localesEn from "@locales/en";
import localesUk from "@locales/uk";
import { languageSelector } from "@modules/layouts/Dashboard/selectors";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

const messages = {
  en: localesEn.messages,
  uk: localesUk.messages,
};

const LocalizationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const language = useSelector(languageSelector);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
