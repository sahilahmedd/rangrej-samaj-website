"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users, Phone } from "lucide-react";
import { splitEventsByDate } from "@/utils/eventHelpers";

const tabItems = [
  { label: "Upcoming Events", value: "upcoming" },
  { label: "Past Events", value: "past" },
];

export default function EventsSection() {
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


  console.log("Upcoming: ", upcoming  );
  

  // const upcomingEvents = [
  //   {
  //     id: 1,
  //     title: "Annual Nikah Sammelan 2025",
  //     date: "May 15, 2025",
  //     time: "10:00 AM - 6:00 PM",
  //     location: "Rangraj Community Hall, Mumbai",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Our annual marriage meet bringing together eligible candidates from the Rangraj community.",
  //     category: "vivah",
  //     attendees: 200,
  //   },
  //   {
  //     id: 2,
  //     title: "Health Check-up Camp",
  //     date: "June 10, 2025",
  //     time: "9:00 AM - 4:00 PM",
  //     location: "Rangraj Bhavan, Delhi",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Free health check-ups including general health, eye, and dental examinations.",
  //     category: "health",
  //     attendees: 150,
  //   },
  //   {
  //     id: 3,
  //     title: "Cultural Festival",
  //     date: "July 22, 2025",
  //     time: "5:00 PM - 10:00 PM",
  //     location: "Central Park, Jaipur",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Celebrating our rich cultural heritage with music, dance, and traditional crafts.",
  //     category: "cultural",
  //     attendees: 300,
  //   },
  //   {
  //     id: 4,
  //     title: "Educational Scholarship Distribution",
  //     date: "August 5, 2025",
  //     time: "11:00 AM - 2:00 PM",
  //     location: "Rangraj Education Center, Ahmedabad",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Distribution of scholarships to deserving students from our community.",
  //     category: "education",
  //     attendees: 100,
  //   },
  // ];

  // const pastEvents = [
  //   {
  //     id: 5,
  //     title: "Zakat Distribution Drive",
  //     date: "March 5, 2025",
  //     time: "10:00 AM - 4:00 PM",
  //     location: "Multiple Locations",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Successfully distributed zakat to over 200 families in need across 5 cities.",
  //     category: "charity",
  //     attendees: 50,
  //   },
  //   {
  //     id: 6,
  //     title: "Youth Leadership Workshop",
  //     date: "February 18, 2025",
  //     time: "9:00 AM - 5:00 PM",
  //     location: "Rangraj Community Center, Ahmedabad",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Empowering the next generation with leadership skills and community values.",
  //     category: "education",
  //     attendees: 75,
  //   },
  //   {
  //     id: 7,
  //     title: "Winter Clothing Distribution",
  //     date: "January 10, 2025",
  //     time: "10:00 AM - 3:00 PM",
  //     location: "Various Locations",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "Provided warm clothing to underprivileged children and elderly community members.",
  //     category: "charity",
  //     attendees: 120,
  //   },
  //   {
  //     id: 8,
  //     title: "New Year Community Gathering",
  //     date: "January 1, 2025",
  //     time: "6:00 PM - 10:00 PM",
  //     location: "Rangraj Community Hall, Mumbai",
  //     image: "/placeholder.svg?height=400&width=600",
  //     description:
  //       "A festive gathering to celebrate the new year with cultural performances and dinner.",
  //     category: "cultural",
  //     attendees: 250,
  //   },
  // ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
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
          <div className="hidden sm:block mt-4">
            <TabsList className="grid w-full grid-cols-2">
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
                  className="overflow-hidden"
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
                    <h3 className="text-xl font-bold mb-2">{event.ENVT_DESC}</h3>
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
                    <p className="text-muted-foreground">{event.ENVT_EXCERPT}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="w-full bg-[#B7410E] hover:bg-[#8B3103] text-white">
                      Register Now
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
                  className="overflow-hidden"
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
                    <h3 className="text-xl font-bold mb-2">{event.ENVT_DESC}</h3>
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
                    <p className="text-muted-foreground">{event.ENVT_EXCERPT}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="outline" className="w-full">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
