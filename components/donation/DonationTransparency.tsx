import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl';
import LocaleLink from '../LocaleLink';
const DonationTransparency = () => {
  const t = useTranslations("Donation");
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-rangrez-indigo_dark">
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
        <Button className="bg-[#0C2340] hover:bg-rangrez-indigo_dark text-white">
          {/* Request Annual Report */}
          <LocaleLink path="contact" lable={`${t("donation-transparency-button")}`} />
        </Button>
      </div>
    </div>
  </section>
  )
}

export default DonationTransparency
