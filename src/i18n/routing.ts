import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fa", "en", "ckb"] as const,
  defaultLocale: "fa",
});
export type Locale = (typeof routing.locales)[number];
