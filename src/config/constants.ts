export const STORE_LINKS = {
  en: {
    appStore: "https://apps.apple.com/us/app/id6761618087",
    playStore: "https://apps.apple.com/us/app/id6761618087",
  },
  uk: {
    appStore: "https://apps.apple.com/us/app/id6761618087",
    playStore: "https://apps.apple.com/us/app/id6761618087",
  },
} as const;

export const SUPPORT_EMAIL = "de.pavlenko.dev@gmail.com";

export const EULA_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export type TStoreLink = keyof typeof STORE_LINKS;

export const BASE_URL = "https://pageist-phi.vercel.app";
