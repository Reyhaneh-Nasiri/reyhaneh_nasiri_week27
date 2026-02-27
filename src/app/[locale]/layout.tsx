import { localeConfig } from "@/i18n/localeConfig";
import { generateLocaleMetadata } from "@/i18n/metadata";
import { routing, type Locale } from "@/i18n/routing";
import { IntlProvider } from "@/providers/IntlProvider";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return generateLocaleMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  const { dir, font } = localeConfig[locale];

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${font} antialiased`}>
        <IntlProvider messages={messages} locale={locale}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
