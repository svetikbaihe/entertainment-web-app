import { IntlMessage } from "@type/app";
import { FormattedMessage } from "react-intl";

interface MessageProps {
  message: string | IntlMessage;
}

/**
 * UI-only component.
 *
 * This is a component for working with text
 *
 * It accepts an ordinary text or object for the **format intl**
 *
 * @returns - JSX.Element
 */
function FormattedOrRawMessage({ message }: MessageProps) {
  if (typeof message === "string") {
    return <>{message}</>;
  }

  if (typeof message === "object") {
    return <FormattedMessage {...message} />;
  }

  return <>Error: Unexpeceted empty message</>;
}

export default FormattedOrRawMessage;
