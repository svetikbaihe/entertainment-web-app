import { PropsWithChildren } from "react";

import type { MessageDescriptor } from "react-intl";

export interface SearchAndDiscoverProps extends PropsWithChildren {
  searchPlaceholder: string | MessageDescriptor;
  containerStyle: ({
    isDesktop,
    isTablet,
  }: {
    isDesktop: boolean;
    isTablet: boolean;
  }) => object;
}
