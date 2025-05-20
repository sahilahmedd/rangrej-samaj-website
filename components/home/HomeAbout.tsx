import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LocaleLink from '../LocaleLink'
const HomeAbout = () => {
  const t  = useTranslations("Homepage");
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-saffron">
            {/* About Rangrez Samaj */}
            {t("home-about-title")}
          </h2>
          <p className="text-lg mb-4">
            {/* The Rangrez (Rangrez) Samaj is a vibrant community with a rich
            cultural heritage in textile dyeing and craftsmanship. Our
            community has been preserving traditional art forms while
            adapting to modern challenges. */}
            {t("home-about-description")}
          </p>
          <p className="text-lg mb-6">
            {/* Today, we focus on empowering our community through education,
            healthcare, cultural preservation, and social welfare
            initiatives. */}
            {t("home-about-description-2")}
          </p>
          <Button
            asChild
            className=""
          >
            {/* <Link href="/about">
            {t("home-about-button")}
            </Link> */}

            <LocaleLink path='kharikadhawa' lable={`${t("home-about-button")}`} classes='bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white px-4 py-2 rounded-lg'/>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            // src="/placeholder.svg?height=800&width=600"
            src="/images/image-4.jpg"
            alt="Rangrez Samaj Community"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeAbout
