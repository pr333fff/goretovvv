import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "GORETOV | Telegram-боты и автоматизации для бизнеса",
  description: "Разработка Telegram-ботов, mini-apps и автоматизаций для бизнеса. Готовые решения и индивидуальные проекты.",
  keywords: ["telegram bot", "автоматизация", "разработка ботов", "mini-apps", "telegram"],
  authors: [{ name: "GORETOV" }],
  openGraph: {
    title: "GORETOV | Telegram-боты и автоматизации",
    description: "Разработка Telegram-ботов, mini-apps и автоматизаций для бизнеса",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
