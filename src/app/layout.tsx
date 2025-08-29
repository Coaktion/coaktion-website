import type { Metadata } from "next";
import { Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ApplicationProvider } from "./providers/application";
import { getLocale, getMessages } from "next-intl/server";

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Coaktion",
  description: "Coaktion - Simplificando a transformação digital.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth scroll-pt-[92px]">
      <body
        className={`${RobotoMono.variable} ${roboto.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ApplicationProvider>{children}</ApplicationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
