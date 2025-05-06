import React from 'react'
import { Button } from '../ui/button'
<<<<<<< HEAD

const DonationTransparency = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Transparency & Accountability</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-6">
          We are committed to complete transparency in how we use donations. All funds are meticulously tracked and
          used solely for the intended purposes.
        </p>
        <p className="text-lg mb-6">
          Our financial records are audited annually by independent auditors, and reports are made available to all
          donors upon request.
        </p>
        <p className="text-lg mb-8">
          We provide regular updates on our projects and initiatives through our newsletter and social media
          channels.
        </p>
        <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">Request Annual Report</Button>
=======
import { useTranslations } from 'next-intl';
const DonationTransparency = () => {
  const t = useTranslations("Donation");
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
        {/* Transparency & Accountability */}
        {t("donation-transparency-title")}
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-6">
          {/* We are committed to complete transparency in how we use donations. All funds are meticulously tracked and
          used solely for the intended purposes. */}
          {t("donation-transparency-description")}
        </p>
        <p className="text-lg mb-6">
          {/* Our financial records are audited annually by independent auditors, and reports are made available to all
          donors upon request. */}
          {t("donation-transparency-description-2")}
        </p>
        <p className="text-lg mb-8">
          {/* We provide regular updates on our projects and initiatives through our newsletter and social media
          channels. */}
          {t("donation-transparency-description-3")}
        </p>
        <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
          {/* Request Annual Report */}
          {t("donation-transparency-button")}
        </Button>
>>>>>>> lang
      </div>
    </div>
  </section>
  )
}

export default DonationTransparency
