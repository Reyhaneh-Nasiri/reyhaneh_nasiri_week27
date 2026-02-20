import { Montserrat, Vazirmatn } from "next/font/google";

export const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const localeConfig = {
  fa: { dir: "rtl", font: vazir.className },
  ckb: { dir: "rtl", font: vazir.className },
  en: { dir: "ltr", font: montserrat.className },
} as const;

export type Locale = keyof typeof localeConfig;
