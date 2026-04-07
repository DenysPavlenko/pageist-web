import { Typography } from "@/src/components/ui";
import { useTranslations } from "next-intl";
import { EULA_URL, SUPPORT_EMAIL } from "@/src/config/constants";
import Link from "next/link";

interface FooterProps {
  locale: string;
  className?: string;
}

export const Footer = ({ locale, className }: FooterProps) => {
  const t = useTranslations("Footer");

  return (
    <div className={`text-center ${className}`}>
      <Typography variant="h4" className="mb-2">
        {t("contact")}
      </Typography>
      <a href={`mailto:${SUPPORT_EMAIL}`}>
        <Typography
          variant="span"
          className="text-primary md:text-3xl font-bold"
        >
          {SUPPORT_EMAIL}
        </Typography>
      </a>

      <div className="mt-8 flex items-center justify-center gap-4 text-secondary">
        <Link
          href={`/${locale}/privacy`}
          className="hover:text-primary transition-colors duration-200"
        >
          <Typography variant="body1">{t("privacy")}</Typography>
        </Link>
        <span>|</span>
        <a
          href={EULA_URL}
          className="hover:text-primary transition-colors duration-200"
        >
          <Typography variant="body1">{t("terms")}</Typography>
        </a>
      </div>
    </div>
  );
};
