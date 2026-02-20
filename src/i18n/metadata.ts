import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "./routing";

export async function generateLocaleMetadata(
  locale: Locale,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "layout.metadata" });

  const brandName = siteConfig.brand.name[locale];
  const title = t("title", { brand: brandName });
  const description = t("description", { brand: brandName });
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "fa-IR": "/fa",
        "en-US": "/en",
        "ku-IQ": "/ckb",
      },
    },
    openGraph: {
      title,
      description,
      siteName: brandName,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
