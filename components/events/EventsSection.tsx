import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';



const EventsSection = () => {

    const upcomingEvents = [
        {
          id: 1,
          title: "Annual Vivah Sammelan 2025",
          date: "May 15, 2025",
          time: "10:00 AM - 6:00 PM",
          location: "Rangraj Community Hall, Mumbai",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Our annual marriage meet bringing together eligible candidates from the Rangraj community.",
          category: "vivah",
          attendees: 200,
        },
        {
          id: 2,
          title: "Health Check-up Camp",
          date: "June 10, 2025",
          time: "9:00 AM - 4:00 PM",
          location: "Rangraj Bhavan, Delhi",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Free health check-ups including general health, eye, and dental examinations.",
          category: "health",
          attendees: 150,
        },
        {
          id: 3,
          title: "Cultural Festival",
          date: "July 22, 2025",
          time: "5:00 PM - 10:00 PM",
          location: "Central Park, Jaipur",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Celebrating our rich cultural heritage with music, dance, and traditional crafts.",
          category: "cultural",
          attendees: 300,
        },
        {
          id: 4,
          title: "Educational Scholarship Distribution",
          date: "August 5, 2025",
          time: "11:00 AM - 2:00 PM",
          location: "Rangraj Education Center, Ahmedabad",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Distribution of scholarships to deserving students from our community.",
          category: "education",
          attendees: 100,
        },
      ];

      const pastEvents = [
        {
          id: 5,
          title: "Zakat Distribution Drive",
          date: "March 5, 2025",
          time: "10:00 AM - 4:00 PM",
          location: "Multiple Locations",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Successfully distributed zakat to over 200 families in need across 5 cities.",
          category: "charity",
          attendees: 50,
        },
        {
          id: 6,
          title: "Youth Leadership Workshop",
          date: "February 18, 2025",
          time: "9:00 AM - 5:00 PM",
          location: "Rangraj Community Center, Ahmedabad",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Empowering the next generation with leadership skills and community values.",
          category: "education",
          attendees: 75,
        },
        {
          id: 7,
          title: "Winter Clothing Distribution",
          date: "January 10, 2025",
          time: "10:00 AM - 3:00 PM",
          location: "Various Locations",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "Provided warm clothing to underprivileged children and elderly community members.",
          category: "charity",
          attendees: 120,
        },
        {
          id: 8,
          title: "New Year Community Gathering",
          date: "January 1, 2025",
          time: "6:00 PM - 10:00 PM",
          location: "Rangraj Community Hall, Mumbai",
          image: "/placeholder.svg?height=400&width=600",
          description:
            "A festive gathering to celebrate the new year with cultural performances and dinner.",
          category: "cultural",
          attendees: 250,
        },
      ];

  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                id={event.category}
                className="overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Expected Attendees: {event.attendees}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
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
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Attendees: {event.attendees}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
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
  )
}

export default EventsSection
