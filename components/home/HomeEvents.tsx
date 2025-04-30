"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// const events = [
//   {
//     id: 1,
//     title: "Annual Nikah Sammelan 2025",
//     date: "May 15, 2025",
//     location: "Rangraj Community Hall, Mumbai",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Our annual marriage meet bringing together eligible candidates from the Rangraj community.",
//   },
//   {
//     id: 2,
//     title: "Health Check-up Camp",
//     date: "June 10, 2025",
//     location: "Rangraj Bhavan, Delhi",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Free health check-ups including general health, eye, and dental examinations.",
//   },
//   {
//     id: 3,
//     title: "Cultural Festival",
//     date: "July 22, 2025",
//     location: "Central Park, Jaipur",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Celebrating our rich cultural heritage with music, dance, and traditional crafts.",
//   },
//   {
//     id: 4,
//     title: "Zakat Distribution Drive",
//     date: "March 5, 2025",
//     location: "Multiple Locations",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     id: 5,
//     title: "Lorem ipsum dolor sit amet,",
//     date: "March 5, 2025",
//     location: "Multiple Locations",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     id: 6,
//     title: "Lorem ipsum dolor sit amet,",
//     date: "March 5, 2025",
//     location: "Multiple Locations",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     id: 7,
//     title: "Lorem ipsum dolor sit amet",
//     date: "March 5, 2025",
//     location: "Multiple Locations",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
// ];


const HomeEvents = () => {

  const [ event, setEvents ] = useState<any[]>([])
  const [pastEvents, setPastEvents] = useState<any[]>([]);

  const fetchEvents = async() =>{
    const res = await fetch("https://node2-plum.vercel.app/api/user/events")
    const data = await res.json()

    console.log("Data: ", data.events);
    const { pastEvents, upcomingEvents } = splitEventsByDate(data.events);

    setPastEvents(pastEvents);
    setEvents(upcomingEvents);
  }


  console.log("Event: ", event);
  console.log("Event Past: ", pastEvents);

  

  useEffect(()=>{
    fetchEvents();
  },[])

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
          Our Events
        </h2>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 ">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
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
                      <div className="bg-white rounded-lg border mb-5 p-4 h-full flex flex-col">
                        <Image
                          src={event.ENVT_BANNER_IMAGE}
                          alt={event.ENVT_DESC}
                          width={600}
                          height={400}
                          className="rounded mb-4 object-cover w-full h-48"
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
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 p-4 text-white hover:text-white bg-[#B7410E] hover:bg-[#8B3103] -translate-y-1/2 z-10" />
                <CarouselNext className="absolute -right-4 top-1/2 p-4 text-white hover:text-white bg-[#B7410E] hover:bg-[#8B3103] -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="relative">
              <Carousel>
                <CarouselContent>
                  {pastEvents.map((event) => (
                    <CarouselItem
                      key={event.id}
                      className="md:basis-1/3 basis-4/5"
                    >
                      <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
                        <Image
                          src={event.ENVT_BANNER_IMAGE}
                          alt={event.ENVT_DESC}
                          width={600}
                          height={400}
                          className="rounded mb-4 object-cover w-full h-48"
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
                <CarouselPrevious className="absolute left-0 top-1/2 text-white hover:text-white bg-[#B7410E] hover:bg-[#8B3103] -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-0 top-1/2 text-white hover:text-white bg-[#B7410E] hover:bg-[#8B3103] -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-8">
          <Button
            asChild
            className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
