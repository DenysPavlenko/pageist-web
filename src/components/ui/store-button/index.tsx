"use client";
import { Typography } from "../typography";
import { Icon, IconName } from "../icon";
import { useTranslations, useLocale } from "next-intl";
import { STORE_LINKS, TStoreLink } from "../../../config/constants";
import { track } from "@vercel/analytics";

export interface StoreButtonProps {
  store: "apple" | "google";
  className?: string;
}

const storeAssets = {
  apple: {
    label: "download_on",
    subLabel: "app_store",
    icon: "app-store" as IconName,
  },
  google: {
    label: "get_it_on",
    subLabel: "google_play",
    icon: "play-store" as IconName,
  },
};

export function StoreButton({
  store = "apple",
  className = "",
}: StoreButtonProps) {
  const { label, subLabel, icon } = storeAssets[store];
  const locale = useLocale() as TStoreLink;
  const t = useTranslations("HomePage");

  const url =
    store === "apple"
      ? STORE_LINKS[locale].appStore
      : STORE_LINKS[locale].playStore;

  const handleClick = () => {
    track("Store Button Click", {
      store: store,
      locale: locale,
      url: url,
    });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-4xl shadow-md transition-transform hover:scale-105 focus:outline-none ${className} py-2 px-6 bg-on-surface`}
    >
      <Icon name={icon} size={32} className="text-surface" />
      <div className="flex flex-col items-start gap-0.5">
        <Typography variant="caption" className="text-surface">
          {t(label)}
        </Typography>
        <Typography
          variant="h6"
          className="text-surface font-bold leading-none"
        >
          {t(subLabel)}
        </Typography>
      </div>
    </a>
  );
}
