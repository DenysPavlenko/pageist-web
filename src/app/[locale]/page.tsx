import { Download, Footer, Hero, Info } from "@/src/components/sections";
import { Header } from "@/src/components/ui";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("HomePage");

  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-12">
      <Header className="absolute top-0 left-0" />
      <Hero title={t("title")} subtitle={t("subtitle")} locale={locale} />
      <div className="flex flex-col gap-20 my-20">
        <Info locale={locale} />
        <Download locale={locale} />
        <Footer locale={locale} />
      </div>
    </main>
  );
}
