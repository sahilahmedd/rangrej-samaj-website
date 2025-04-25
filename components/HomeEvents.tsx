import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventSlider from "@/components/event-slider";

const HomeEvents = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
        Our Events
      </h2>
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <EventSlider
            events={[
              {
                id: 1,
                title: "Annual Vivah Sammelan 2025",
                date: "May 15, 2025",
                location: "Rangraj Community Hall, Mumbai",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Our annual marriage meet bringing together eligible candidates from the Rangraj community.",
              },
              {
                id: 2,
                title: "Health Check-up Camp",
                date: "June 10, 2025",
                location: "Rangraj Bhavan, Delhi",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Free health check-ups including general health, eye, and dental examinations.",
              },
              {
                id: 3,
                title: "Cultural Festival",
                date: "July 22, 2025",
                location: "Central Park, Jaipur",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Celebrating our rich cultural heritage with music, dance, and traditional crafts.",
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="past">
          <EventSlider
            events={[
              {
                id: 4,
                title: "Zakat Distribution Drive",
                date: "March 5, 2025",
                location: "Multiple Locations",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Successfully distributed zakat to over 200 families in need across 5 cities.",
              },
              {
                id: 5,
                title: "Youth Leadership Workshop",
                date: "February 18, 2025",
                location: "Rangraj Community Center, Ahmedabad",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Empowering the next generation with leadership skills and community values.",
              },
              {
                id: 6,
                title: "Winter Clothing Distribution",
                date: "January 10, 2025",
                location: "Various Locations",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Provided warm clothing to underprivileged children and elderly community members.",
              },
            ]}
          />
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
  )
}

export default HomeEvents
