'use client'

import React, { useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card, CardContent } from "@/components/ui/card"
import {
  Hospital,
  Landmark,
  Users,
  CalendarDays,
  ArrowRight,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  // const sliderRef = useRef(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const cardData = [
    {
      icon: <Hospital className="w-8 h-8 text-[#B7410E]" />,
      title: "Hospital",
      description:
        "Free medical camps, treatments, and health awareness programs for our community.",
      href: "/initiatives#health",
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#B7410E]" />,
      title: "Zakat & Donations",
      description:
        "Supporting the needy through charitable donations and zakat distribution.",
      href: "/donation",
    },
    {
      icon: <Users className="w-8 h-8 text-[#B7410E]" />,
      title: "Vivah Sammelan",
      description:
        "Marriage meets to help community members find suitable life partners.",
      href: "/events#vivah",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-[#B7410E]" />,
      title: "Upcoming Events",
      description:
        "Stay updated with our community gatherings, cultural programs, and more.",
      href: "/events",
    },
    {
      icon: <Star className="w-8 h-8 text-[#B7410E]" />,
      title: "More Events",
      description:
        "Never miss out on what’s happening around you in the community.",
      href: "/events",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#B7410E]" />,
      title: "Rangrej Academy",
      description:
        "Empowering education in the community.",
      href: "/academy",
    },
  ]

  return (
    <div className="relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {cardData.map((card, index) => (
          <div key={index} className="keen-slider__slide">
            <Card className="border-2 border-[#F2C94C]/20 hover:border-[#F2C94C] transition-all h-full">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
                <Link
                  href={card.href}
                  className="text-[#B7410E] flex items-center gap-1 hover:underline"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          {/* Prev Button */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 md:p-3 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B7410E]" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 md:p-3 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B7410E]" />
          </button>
        </>
      )} 

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from(
            {
              length: instanceRef.current.track.details.slides.length,
            },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx
                    ? "bg-[#B7410E]"
                    : "bg-gray-300"
                } transition-all`}
              />
            )
          )}
        </div>
      )}
    </div>
  )
}
