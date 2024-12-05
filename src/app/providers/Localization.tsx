import type React from "react";

import localesEn from "@locales/en";
import localesUk from "@locales/uk";
import { IntlProvider } from "react-intl";

const messages = {
  en: localesEn.messages,
  uk: localesUk.messages,
};

const defaultLocale = "en";

const LocalizationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
