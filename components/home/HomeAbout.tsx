import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HomeAbout = () => {
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
            About Rangraj Samaj
          </h2>
          <p className="text-lg mb-4">
            The Rangraj (Rangrez) Samaj is a vibrant community with a rich
            cultural heritage in textile dyeing and craftsmanship. Our
            community has been preserving traditional art forms while
            adapting to modern challenges.
          </p>
          <p className="text-lg mb-6">
            Today, we focus on empowering our community through education,
            healthcare, cultural preservation, and social welfare
            initiatives.
          </p>
          <Button
            asChild
            className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            // src="/placeholder.svg?height=800&width=600"
            src="/images/image-4.jpg"
            alt="Rangraj Samaj Community"
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
