import type React from "react";

import store from "@state/store";
import { Provider } from "react-redux";

const ReduxProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
