import { PropsWithChildren, ReactNode } from "react";

export interface FormProps extends PropsWithChildren {
  title: string;
  additionalText: string;
  linkText: string;
  linkDestination: string;
  buttonText: string;
  action: string;
  method: string;
  onClick: VoidFunction;
  endComponent: ReactNode;
}
