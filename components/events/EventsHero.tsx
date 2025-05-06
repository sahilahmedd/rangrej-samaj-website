import React from 'react'
import Image from 'next/image'
<<<<<<< HEAD

const EventsHero = () => {
=======
import { useTranslations } from 'next-intl';
const EventsHero = () => {
  const t = useTranslations("Events");
>>>>>>> lang
  return (
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        // src="/placeholder.svg?height=800&width=1920"
        src="/images/events.png"
        alt="Events"
        fill
        className="object-cover brightness-50"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
<<<<<<< HEAD
        Events
      </h1>
      <p className="text-xl text-white/90 max-w-[800px]">
        Join us for our upcoming events or explore our past gatherings.
=======
        {/* Events */}
        {t("events-hero-title")}
      </h1>
      <p className="text-xl text-white/90 max-w-[800px]">
        {/* Join us for our upcoming events or explore our past gatherings. */}
        {t("events-hero-description")}
>>>>>>> lang
      </p>
    </div>
  </section>
  )
}

export default EventsHero
