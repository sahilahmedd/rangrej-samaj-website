import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
  const t = useTranslations("Homepage");
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
        {/* Community Voices */}
        {t("home-testimonials-title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-2 border-[#F2C94C]/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=P${i}`}
                    alt="Person"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {/* Community Member */}
                    {t("home-testimonials-title-h4")}
                    {i}
                    </h4>
                  <p className="text-sm text-muted-foreground">
                    {/* Beneficiary */}
                    {t("home-testimonials-title-beneficiary")}
                  </p>
                </div>
              </div>
              <p className="italic">
                {/* "The support from Rangraj Samaj has been life-changing for
                my family. The medical assistance helped us during a
                difficult time, and we are forever grateful." */}
                {t("home-testimonials-description")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials
