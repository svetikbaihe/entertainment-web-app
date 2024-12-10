import type { MessageDescriptor } from "react-intl";

export interface InputSearchProps {
  placeholder: string | MessageDescriptor;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
