import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
const DonationHero = () => {
  const t = useTranslations("Donation");
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        // src="/placeholder.svg?height=800&width=1920"
        src="/images/donation.png"
        alt="Donation and Zakat"
        fill
        className="object-cover brightness-50"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
        {/* Donation & Zakat */}
        {t("donation-hero-title")}
      </h1>
      <p className="text-xl text-white/90 max-w-[800px]">
        {/* Your generosity can change lives. Support our community initiatives through donations and Zakat. */}
        {t("donation-hero-description")}
      </p>
    </div>
  </section>
  )
}

export default DonationHero
