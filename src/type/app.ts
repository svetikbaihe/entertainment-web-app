import { ElementType, ReactElement, ReactNode } from "react";

import { MessageDescriptor } from "react-intl";

export interface MediaItem {
  title: string;
  id: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface Thumbnail {
  trending: Trending;
  regular: Regular;
}

export interface Trending {
  small: string;
  large: string;
}

export interface Regular {
  small: string;
  medium: string;
  large: string;
}

export interface IntlMessage<
  V extends Record<string, unknown> = Record<string, ReactNode>,
> extends MessageDescriptor {
  values?: V;
  tagName?: ElementType;
  children?(nodes: Iterable<ReactNode>): ReactElement | null;
}
