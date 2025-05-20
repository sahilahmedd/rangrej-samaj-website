import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const DonationTestimonials = () => {
  const t = useTranslations("Donation");
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-rangrez-indigo_dark">
        {/* Impact Stories */}
        {t("donation-testimonials-title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-2 border-rangrez-sand_hover/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0C2340]/10 overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=P${i}`}
                    alt="Beneficiary"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {/* Beneficiary */}
                    {t("donation-testimonials-beneficiary")} {i}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {/* Healthcare Recipient */}
                    {t("donation-testimonials-healthcare-recipient")}
                  </p>
                </div>
              </div>
              <p className="italic">
                {/* The medical assistance provided by Rangrez Samaj was life-saving for my family. My child needed
                urgent surgery, and we couldn't afford it. Thanks to the generous donors, my child received the
                treatment and is now healthy and thriving. */}
                {t("donation-testimonials-testimonial")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default DonationTestimonials
