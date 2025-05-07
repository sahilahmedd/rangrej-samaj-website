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
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

export default function CardSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [adsApi, setAdsApi] = useState<CarouselApi | null>(null);
  const [adsCurrent, setAdsCurrent] = useState(0);
  const [adCount, setAdCount] = useState(0);
  const [currentAd, setCurrentAd] = useState(0);

  const t = useTranslations("Homepage");

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!adsApi) return;

    setAdCount(adsApi.scrollSnapList().length);
    setAdsCurrent(adsApi.selectedScrollSnap());

    adsApi.on("select", () => {
      setAdsCurrent(adsApi.selectedScrollSnap());
    });
  }, [adsApi]);

  const cardData = [
    {
      icon: <Hospital className="w-8 h-8 text-[#B7410E]" />,
      title: t("hospital-title"),
      description: t("hospital-description"),
      href: "/initiatives#health",
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#B7410E]" />,
      title: t("zakat-title"),
      description: t("zakat-description"),
      href: "/donation",
    },
    {
      icon: <Users className="w-8 h-8 text-[#B7410E]" />,
      title: t("nikah-title"),
      description: t("nikah-description"),
      href: "/events#nikah",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-[#B7410E]" />,
      title: t("education-title"),
      description: t("education-description"),
      href: "/events",
    },
    {
      icon: <Star className="w-8 h-8 text-[#B7410E]" />,
      title: t("culture-title"),
      description: t("culture-description"),
      href: "/events",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#B7410E]" />,
      title: t("academy-title"),
      description: t("academy-description"),
      href: "/academy",
    },
  ];

  const adData = [
    {
      title: "Sponsor Us",
      description: "Get your brand in front of thousands!",
    },
    {
      title: "Advertise Events",
      description: "Share your event with the community.",
    },
    {
      title: "Showcase Products",
      description: "Promote your products or services here.",
    },
  ];

  // Auto-scroll ads every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4">
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
                className="pl-4 md:pl-6 lg:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
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
                      {/* Learn more */}
                      {t("button-LearnMore")}
                      <ArrowRight className="w-4 h-4" />
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

      {/* Ads slider */}
      {/* <div className="w-full lg:w-1/5">
        <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all h-full overflow-hidden">
          <CardContent className="p-6 text-center h-64 relative">
            <Carousel
              orientation="horizontal"
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="h-full"
            >
              <CarouselContent className="h-full">
                {adData.map((ad, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold text-blue-700">
                        {ad.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {ad.description}
                      </p>
                      <button className="mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
                        Learn More
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
      </div>  */}
      {/* 
      <div className="w-full lg:w-1/5">
        <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all h-full overflow-hidden">
          <CardContent className="p-6 text-center h-64 relative">
            <Carousel
              setApi={setAdsApi}
              orientation="horizontal"
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="h-full"
            >
              <CarouselContent className="h-full">
                {adData.map((ad, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold text-blue-700">
                        {ad.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {ad.description}
                      </p>
                      <button className="mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
                        Learn More
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              Navigation Buttons
              <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 hover:bg-gray-100" />
              <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 hover:bg-gray-100" />
            </Carousel>

            Dots
            {adCount > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: adCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      adsCurrent === idx ? "bg-blue-600" : "bg-gray-300"
                    } transition-all`}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div> */}

      <div className="w-full lg:w-1/5 flex flex-col items-center">
        <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all h-full overflow-hidden w-full">
          <CardContent className="p-6 text-center h-64 relative">
            <Carousel
              setApi={setAdsApi}
              orientation="horizontal"
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="h-full"
            >
              <CarouselContent className="h-full">
                {adData.map((ad, index) => (
                  // <CarouselItem
                  //   key={index}
                  //   className="h-full flex items-center justify-center"
                  // >
                  //   <div className="text-center space-y-2">
                  //     <h3 className="text-lg font-semibold text-blue-700">
                  //       {ad.title}
                  //     </h3>
                  //     <p className="text-sm text-muted-foreground">
                  //       {ad.description}
                  //     </p>
                  //     <button className="mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
                  //       Learn More
                  //     </button>
                  //   </div>
                  // </CarouselItem>
                  <CarouselItem
                    key={index}
                    className="h-full pt-10 flex items-center justify-center text-center"
                  >
                    <div className="space-y-2 max-w-[90%] mx-auto">
                      <h3 className="text-lg font-semibold text-blue-700">
                        {ad.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {ad.description}
                      </p>
                      <button className="mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
                        Learn More
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 hover:bg-gray-100" />
              <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 hover:bg-gray-100" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Dots Outside the Card */}
        {adCount > 1 && (
          <div className="mt-3 flex gap-2">
            {Array.from({ length: adCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => adsApi?.scrollTo(idx)}
                className={`w-2.5 h-2.5 rounded-full ${
                  adsCurrent === idx ? "bg-blue-600" : "bg-gray-300"
                } transition-all`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
