import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/placeholder.svg?height=800&width=1920"
        alt="About Rangraj Samaj"
        fill
        className="object-cover brightness-50"
        priority
      />
    </div>
    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
        About Rangraj Samaj
      </h1>
    </div>
  </section>
  )
}

export default AboutHero
