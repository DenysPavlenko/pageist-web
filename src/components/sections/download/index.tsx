import { StoreButton, Typography } from "@/src/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface DownloadProps {
  locale: string;
  className?: string;
}

export const Download = ({ locale, className }: DownloadProps) => {
  const t = useTranslations("Download");

  return (
    <div
      className={`bg-primary-container flex rounded-3xl overflow-hidden relative z-1 ${className}`}
    >
      <div className="w-full max-w-[300px] lg:max-w-[600px] p-8 lg:p-16">
        <Typography variant="body1" className="mb-10">
          {t("ready")}
        </Typography>
        <Typography
          variant="span"
          className="mb-10 text-3xl md:text-5xl font-bold block"
        >
          {t("download")}
        </Typography>
        <div className="flex gap-4 flex-col lg:flex-row items-start mb-4">
          <StoreButton store="apple" />
          <StoreButton store="google" />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-1/2 absolute top-8 lg:top-16 right-0 -z-1">
        <Image
          src={`/screens/main-${locale}.png`}
          alt="download-screen"
          width={400}
          height={300}
          className="object-contain w-1/2"
        />
      </div>
    </div>
  );
};
