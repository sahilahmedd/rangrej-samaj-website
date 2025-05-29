import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import LocaleLink from '../LocaleLink';

const HeroHome = () => {

  const t = useTranslations("Homepage")

    return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/image-2.jpg"
        alt="Rangrez Samaj Cultural Image"
        fill
        className="object-cover brightness-50"
        loading="lazy"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
      <h1 className="text-5xl mb-4 md:text-7xl font-bold text-white tracking-tighter">
        {t('title')}
      </h1>
      <p className="text-xl text-white/90 max-w-[800px]">
        {t('title-h1')}
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {/* <LocaleLink 
        classes="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white"
        path="contact" 
        lable={`${t('button-Join')}`} /> */}

        <Button
          size="lg"
          className="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white"
        >
          {/* {t('button-Join')} */}
          <LocaleLink lable={`${t('button-Join')}`} path='contact' classes=''/>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
        >
          {/* Donate Now */}
          <LocaleLink lable={`${t('button-Donate')}`} path='donation' classes=''/>
        </Button> 
        {/* <Button
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
        >
          Attend Next Event
           {t('button-Volunteer')}
        </Button>  */}
      </div>
    </div>
  </section>
  )
}

export default HeroHome