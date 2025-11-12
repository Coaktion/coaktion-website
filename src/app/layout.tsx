import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ApplicationProvider } from "./providers/application";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";

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
      <meta
        name="google-site-verification"
        content="egCsjdRFJqdgrqpNFT3pYzOWtq4bSDM5cXJC6G1VJXY"
      />
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JWTJ7N83RJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JWTJ7N83RJ');
          `}
        </script>
      </head>
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Script id="getresponse-tracking" strategy="afterInteractive">
            {`
            (function(m, o, n, t, e, r, _) {
              m['__GetResponseAnalyticsObject'] = e;
              m[e] = m[e] || function() {
                (m[e].q = m[e].q || []).push(arguments)
              };
              r = o.createElement(n), _ = o.getElementsByTagName(n)[0];
              r.async = 1;
              r.src = t;
              r.setAttribute('crossorigin', 'use-credentials');
              _.parentNode.insertBefore(r, _);
            })(window, document, 'script', 'https://mailing.aktienow.com/script/0c5ef59b-d7b0-40c1-8116-615cba97ba3e/ga.js', 'GrTracking');
          `}
          </Script>
          <ApplicationProvider>{children}</ApplicationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
