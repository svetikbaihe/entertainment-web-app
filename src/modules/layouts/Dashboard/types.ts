import { MediaItem } from "@type/app";

export enum LanguageType {
  EN = "en",
  UK = "uk",
}

export interface InitialState {
  mediaData: MediaItem[];
  language: LanguageType;
}
