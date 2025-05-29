import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AboutHero = () => {

  const t  = useTranslations('About')

  return (
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        // src="/placeholder.svg?height=800&width=1920"
        src="/images/image-8.jpg"
        alt="About Rangrez Samaj"
        fill
        className="object-cover brightness-50"
        loading="lazy"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
        {/* About Rangrez Samaj */}
        {t('title')}
      </h1>
    </div>
  </section>
  )
}

export default AboutHero
