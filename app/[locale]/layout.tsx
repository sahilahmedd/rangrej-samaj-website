import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
<<<<<<< HEAD
import Script from "next/script"
=======
>>>>>>> lang

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rangraj Samaj",
  description:
    "Empowering and uniting the Rangraj (Rangrez) Samaj through health, charity, marriage meets, and cultural awareness.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  // Ensure that the incoming 'locale' is valid
  const { locale } = await params;

  if(!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
