"use client";

import { Typography } from "@/src/components/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { InfoAccordionItem } from "./info-accordion-item";

interface InfoProps {
  locale: string;
  className?: string;
}

export const Info = ({ locale, className }: InfoProps) => {
  const t = useTranslations("Info");
  const [expandedItem, setExpandedItem] = useState<string | null>("01");

  const infoItems = [
    { number: "01", key: "01", imageSrc: `/screens/01-${locale}.png` },
    { number: "02", key: "02", imageSrc: `/screens/02-${locale}.png` },
    { number: "03", key: "03", imageSrc: `/screens/03-${locale}.png` },
    { number: "04", key: "04", imageSrc: `/screens/04-${locale}.png` },
    { number: "05", key: "05", imageSrc: `/screens/05-${locale}.png` },
  ];

  const handleAccordionChange = (key: string) => (expanded: boolean) => {
    // Always keep at least one accordion open
    if (!expanded && expandedItem === key) {
      // Don't allow closing if this is the only open accordion
      return;
    }
    setExpandedItem(expanded ? key : null);
  };

  return (
    <div className={className}>
      <Typography variant="h2" className="text-center mb-10">
        {t("title")}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section - Left - Hidden on mobile */}
        <div className="hidden md:block relative h-128 overflow-hidden">
          <div className="absolute inset-0">
            {infoItems.map(({ key, imageSrc, number }) => (
              <div
                key={key}
                className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out",
                  expandedItem === key ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={imageSrc}
                  alt={`info-${number}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Accordions Section - Right */}
        <div className="space-y-4">
          {infoItems.map(({ number, key }) => (
            <InfoAccordionItem
              key={key}
              number={number}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              expanded={expandedItem === key}
              onChange={handleAccordionChange(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
