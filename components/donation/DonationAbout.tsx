import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
const DonationAbout = () => {
  const t = useTranslations("Donation");
  return (
    <section className="py-16 ">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
            {/* About Donations & Zakat */}
            {t("donation-about-title")}
          </h2>
          <p className="text-lg mb-4">
            {/* Donations and Zakat are vital resources that enable us to serve our community effectively. Through your
            generosity, we can provide essential services and support to those in need. */}
            {t("donation-about-description")}
          </p>
          <p className="text-lg mb-4">
            {/* <strong>Zakat</strong> is one of the five pillars of Islam, requiring Muslims to give 2.5% of their
            qualifying wealth to those in need. It purifies wealth and helps create a more equitable society. */}
            {t("donation-about-zakat-description")}
          </p>
          <p className="text-lg mb-4">
            {/* <strong>Sadaqah</strong> refers to voluntary charity given out of compassion, love, or generosity.
            Unlike Zakat, there are no specific rules about how much or when to give Sadaqah. */}
            {t("donation-about-sadaqah-description")}
          </p>
          <p className="text-lg">
            {/* <strong>General donations</strong> from anyone, regardless of faith or background, are always welcome
            and help us extend our services to more people in need. */}
            {t("donation-about-general-donations-description")}
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            // src="/placeholder.svg?height=800&width=600"
            src="/images/zakat.png"
            alt="Donation and Charity"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default DonationAbout
