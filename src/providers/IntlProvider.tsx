"use client";

import type { Locale } from "@/i18n/routing";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

interface Props {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: Locale;
}

export function IntlProvider({ children, messages, locale }: Props) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
