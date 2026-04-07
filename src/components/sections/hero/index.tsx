import { Logo, StoreButton, Typography } from "@/src/components/ui";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  locale: string;
}

export const Hero = ({ title, subtitle, locale }: HeroProps) => {
  return (
    <div className="md:h-screen min-h-[500] flex flex-col text-center overflow-hidden">
      <div>
        <div className="flex flex-col items-center justify-center gap-8 min-h-screen pt-20">
          <Logo />
          <div>
            <Typography variant="h1" className="mb-1">
              {title}
            </Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row mb-4">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
          <Image
            className="w-full max-w-2xl h-auto object-contain mt-auto"
            src={`/screens/hero-${locale}.png`}
            alt={`hero-image-${locale}`}
            width={953}
            height={1934}
            priority
          />
        </div>
      </div>
    </div>
  );
};
