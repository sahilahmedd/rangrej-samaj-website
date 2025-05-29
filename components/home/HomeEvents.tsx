"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TabsTrigger } from "../tabs-trigger";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { splitEventsByDate } from "@/utils/eventHelpers";
import { useTranslations, useLocale } from "next-intl";

const HomeEvents = () => {
  const t = useTranslations("Homepage");
  const locale = useLocale();

  const [event, setEvents] = useState<any[]>([]);
  const [pastEvents, setPastEvents] = useState<any[]>([]);
  // const [activeTab, setActiveTab] = useState("upcoming");

  const fetchEvents = async () => {
    const res = await fetch("https://node2-plum.vercel.app/api/user/events");
    const data = await res.json();

    console.log("Data: ", data.events);
    const { pastEvents, upcomingEvents } = splitEventsByDate(data.events);

    setPastEvents(pastEvents);
    setEvents(upcomingEvents);
  };

  console.log("Event: ", event);
  console.log("Event Past: ", pastEvents);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="py-16 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-header font-bold text-center mb-12 text-rangrez-indigo_dark">
          {/* Our Events */}
          {t("home-events-title-h2")}
        </h2>
        <Tabs defaultValue="upcoming" className="w-full ">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 gap-2 bg-rangrez-tab">
            <TabsTrigger value="upcoming" className="">
              {/* Upcoming Events */}
              {t("home-events-title-upcoming")}
            </TabsTrigger>
            <TabsTrigger value="past" className="">
              {/* Past Events */}
              {t("home-events-title-past")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="">
            <div className="relative">
              <Carousel className=" pb-10">
                <CarouselContent>
                  {event.map((event, index) => (
                    <CarouselItem
                      key={event.id}
                      className={
                        index === 0
                          ? "md:basis-1/2 basis-4/5"
                          : "md:basis-1/3 basis-4/5"
                      }
                    >
                      <div className=" rounded-lg  border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all mb-5 p-4 h-full flex flex-col">
                        <Image
                          src={event.ENVT_BANNER_IMAGE}
                          alt={event.ENVT_DESC}
                          width={600}
                          height={400}
                          className="rounded mb-4 object-cover w-full h-48"
                          loading="lazy"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                          {event.ENVT_DESC}
                        </h3>
                        {/* <p className="text-sm text-gray-600 mb-1">
                          {event.date}
                        </p> */}
                        <p className="text-sm text-gray-600 mb-2">
                          {`${event.ENVT_ADDRESS}, ${event.ENVT_CITY}`}
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          {event.ENVT_EXCERPT}
                        </p>
                        {/* <div 
                          className="prose"
                          dangerouslySetInnerHTML={{
                            __html: event.ENVT_DETAIL,
                          }}
                        /> */}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 p-4 text-white hover:text-white bg-[#0C2340] hover:bg-rangrez-indigo_dark -translate-y-1/2 z-10" />
                <CarouselNext className="absolute -right-4 top-1/2 p-4 text-white hover:text-white bg-[#0C2340] hover:bg-rangrez-indigo_dark -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="relative">
              <Carousel>
                <CarouselContent>
                  {pastEvents.map((event, index) => (
                    <CarouselItem
                      key={event.id}
                      className={
                        index === 0
                          ? "md:basis-1/2 basis-4/5"
                          : "md:basis-1/3 basis-4/5"
                      }
                    >
                      <div className=" border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all rounded-lg shadow p-4 h-full flex flex-col">
                        <Image
                          src={event.ENVT_BANNER_IMAGE}
                          alt={event.ENVT_DESC}
                          width={600}
                          height={400}
                          className="rounded mb-4 object-cover w-full h-48"
                          loading="lazy"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                          {event.ENVT_DESC}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {event.date}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {`${event.ENVT_ADDRESS}, ${event.ENVT_CITY}`}
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          {event.ENVT_EXCERPT}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 text-white hover:text-white bg-[#0C2340] hover:bg-rangrez-indigo_dark -translate-y-1/2 z-10" />
                <CarouselNext className="absolute -right-4 top-1/2 text-white hover:text-white bg-[#0C2340] hover:bg-rangrez-indigo_dark -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-8">
          <Button
            asChild
            className="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white"
          >
            <Link href={`/${locale}/events`}>
              {/* View All Events */}
              {t("home-events-button")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
