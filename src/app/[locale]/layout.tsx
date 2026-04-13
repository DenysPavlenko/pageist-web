import { Plus_Jakarta_Sans } from "next/font/google";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/src/context";
import "../globals.css";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Pageist",
    description:
      "Reading tracker app that helps you build a daily reading habit by tracking books, logging pages, monitoring streaks, and visualizing your reading progress.",
    applicationCategory: "HealthApplication",
    operatingSystem: ["iOS", "Android"],
    url: "https://pageist.app",
    downloadUrl: [
      "https://apps.apple.com/us/app/id6761618087",
      "https://apps.apple.com/us/app/id6761618087",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Denys Pavlenko",
    },
    inLanguage: [locale === "uk" ? "uk" : "en"],
    keywords:
      "reading tracker, reading habit tracker, book tracker, reading log, reading progress tracker, reading streak app, track books read",
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased bg-surface text-on-surface font-main`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
