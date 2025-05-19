import type React from "react";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-header",
});

export const metadata = {
  title: "Rangraj Samaj",
  description:
    "Empowering and uniting the Rangraj (Rangrez) Samaj through health, charity, marriage meets, and cultural awareness.",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming 'locale' is valid
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.className}`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="beforeInteractive"
              />
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-TVNN33KLF2" />
    </html>
  );
}
