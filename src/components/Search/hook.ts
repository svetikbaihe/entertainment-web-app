import { useIntl } from "react-intl";

const useContainer = () => {
  const intl = useIntl();

  return { intl };
};

export default useContainer;
