export const STORE_LINKS = {
  en: {
    appStore:
      "https://apps.apple.com/us/app/mindstoria-mood-tracker/id6756604660",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mindstoria.app&hl=en",
  },
  uk: {
    appStore:
      "https://apps.apple.com/ua/app/mindstoria-щоденник-настрою/id6756604660?l=uk",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mindstoria.app&hl=uk",
  },
} as const;

export const SUPPORT_EMAIL = "de.pavlenko.dev@gmail.com";

export const EULA_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export type TStoreLink = keyof typeof STORE_LINKS;

export const BASE_URL = "https://mindstoria.vercel.app";
