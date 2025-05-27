"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "../tabs-trigger";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users, Phone } from "lucide-react";
import { splitEventsByDate } from "@/utils/eventHelpers";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import parse from 'html-react-parser';

export default function EventsSection() {
  const t = useTranslations("Events");

  const tabItems = [
    { label: t("events-tabitems-upcoming"), value: "upcoming" },
    { label: t("events-tabitems-past"), value: "past" },
  ];

  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [pastEvents, setPastEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://node2-plum.vercel.app/api/user/events");
      const data = await res.json();

      console.log("Data: ", data.events);
      // setUpcoming(data.events)

      const { pastEvents, upcomingEvents } = splitEventsByDate(data.events);

      setPastEvents(pastEvents);
      setUpcoming(upcomingEvents);
    };

    fetchEvents();
  }, []);

  console.log("Upcoming: ", upcoming);

  const locale = useLocale()

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Mobile Header */}
        <ResponsiveTabHeader
          tabs={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tabs: always rendered */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Desktop Header */}
          <div className="hidden bg-rangrez-tab rounded mb-5 sm:block mt-4">
            <TabsList className="grid gap-2 w-full grid-cols-2">
              {tabItems.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <Card
                  key={event.id}
                  id={event.category}
                  className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.ENVT_BANNER_IMAGE || "/images/logo.png"}
                      alt={event.ENVT_DESC}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {event.ENVT_DESC}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        <span>{`From: ${event.EVNT_FROM_DT}/ To: ${event.EVNT_UPTO_DT}`}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{event.ENVT_CONTACT_NO}</span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div> */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{`${event.ENVT_ADDRESS}, ${event.ENVT_CITY}`}</span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Expected Attendees: {event.attendees}</span>
                      </div> */}
                    </div>
                    <p className="text-muted-foreground">
                      {event.ENVT_EXCERPT}
                    </p>
                    {/* <p className="text-muted-foreground">
                      {parse(event.ENVT_DETAIL)}
                    </p> */}
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="w-full bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white">
                      <Link href={`/${locale}/contact`}>Register Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  id={event.category}
                  className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.ENVT_BANNER_IMAGE || "/placeholder.svg"}
                      alt={event.ENVT_DESC}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {event.ENVT_DESC}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        <span>{`From: ${event.EVNT_FROM_DT}/ To: ${event.EVNT_UPTO_DT}`}</span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div> */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{`${event.ENVT_ADDRESS}, ${event.ENVT_CITY}`}</span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Attendees: {event.attendees}</span>
                      </div> */}
                    </div>
                    <p className="text-muted-foreground">
                      {event.ENVT_EXCERPT}
                    </p>
                  </CardContent>
                  {/* <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="outline" className="w-full">
                      View Gallery
                    </Button>
                  </CardFooter> */}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
