import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ApplicationProvider } from "./providers/application";
import { getLocale, getMessages } from "next-intl/server";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ApplicationProvider>{children}</ApplicationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
