import { vazir, montserrat } from "@/styles/fonts";

export const localeConfig = {
  fa: { dir: "rtl", font: vazir.className },
  ckb: { dir: "rtl", font: vazir.className },
  en: { dir: "ltr", font: montserrat.className },
} as const;