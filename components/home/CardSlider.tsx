"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hospital,
  Landmark,
  Users,
  CalendarDays,
  ArrowRight,
  GraduationCap,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function CardSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
      title: "Nikah Sammelan",
      description:
        "Marriage meets to help community members find suitable life partners.",
      href: "/events#nikah",
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
      description: "Empowering education in the community.",
      href: "/academy",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
          {cardData.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 lg:pl-8 basis-11/12 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 md:p-3 hover:bg-gray-100 transition" />
        <CarouselNext className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 md:p-3 hover:bg-gray-100 transition" />
      </Carousel>

      {/* Dots */}
      {count > 0 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-[#B7410E]" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
