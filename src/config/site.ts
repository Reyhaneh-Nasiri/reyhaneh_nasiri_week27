export const siteConfig = {
  brand: {
    name: {
      fa: "تورینو",
      en: "Torino",
      ckb: "تورینو",
    },
    logo: "/images/logo.png",
    favicon: "/favicon.ico",
  },

  contact: {
    supportPhone: "021-8574",
    bookingNumber: "021-1840",
  },
} as const;

export type SiteConfig = typeof siteConfig;
