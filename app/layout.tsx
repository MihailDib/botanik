import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ботаник — садовый центр",
    template: "%s — Ботаник",
  },
  description:
    "Демонстрационная главная страница садового центра «Ботаник»: комнатные и садовые растения, подбор и советы по уходу.",
  applicationName: "Ботаник",
  keywords: [
    "садовый центр",
    "комнатные растения",
    "растения для сада",
    "суккуленты",
    "Ботаник",
  ],
  openGraph: {
    title: "Ботаник — садовый центр",
    description:
      "Растения, горшки, грунт и всё для сада — в одном пространстве, где хочется задержаться.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e241a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-[10px] focus:font-semibold focus:uppercase focus:tracking-[0.18em] focus:text-paper"
        >
          К содержанию
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
