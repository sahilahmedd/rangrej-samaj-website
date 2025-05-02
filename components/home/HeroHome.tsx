import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {useTranslations} from 'next-intl';

const HeroHome = () => {

  const t = useTranslations("Homepage")

    return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/5.png"
        alt="Rangraj Samaj Cultural Image"
        fill
        className="object-cover brightness-50"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
        {/* Serving Humanity, Preserving Culture */}
        {t('title')}
      </h1>
      <p className="text-xl text-white/90 max-w-[800px]">
        {/* Empowering and uniting the Rangraj (Rangrez) Samaj through health
        initiatives, charity, marriage meets, and cultural awareness. */}
        {t('title-h1')}
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button
          size="lg"
          className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
        >
          Join Us
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
        >
          Donate Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
        >
          Attend Next Event
        </Button>
      </div>
    </div>
  </section>
  )
}

export default HeroHome