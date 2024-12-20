import { PropsWithChildren } from "react";

export interface FormProps extends PropsWithChildren {
  title: string;
  additionalText: string;
  linkText: string;
  linkDestination: string;
  buttonText: string;
  action: string;
  method: string;
  onChange?: VoidFunction;
}
