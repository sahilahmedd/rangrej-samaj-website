import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Heart,
  Music,
  Landmark,
} from "lucide-react";

export default function EventsPage() {
  // Sample event data
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
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Events"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Events
          </h1>
          <p className="text-xl text-white/90 max-w-[800px]">
            Join us for our upcoming events or explore our past gatherings.
          </p>
        </div>
      </section>

      {/* Events Section */}
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

      {/* Event Categories */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
            Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="#vivah">
              <Card className="h-full hover:border-[#B7410E] transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#B7410E]" />
                  </div>
                  <h3 className="text-xl font-bold">Vivah Sammelan</h3>
                  <p className="text-muted-foreground">
                    Marriage meets to help community members find suitable life
                    partners.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#health">
              <Card className="h-full hover:border-[#B7410E] transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#B7410E]" />
                  </div>
                  <h3 className="text-xl font-bold">Health Camps</h3>
                  <p className="text-muted-foreground">
                    Free medical check-ups and health awareness programs for the
                    community.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#cultural">
              <Card className="h-full hover:border-[#B7410E] transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                    <Music className="w-8 h-8 text-[#B7410E]" />
                  </div>
                  <h3 className="text-xl font-bold">Cultural Events</h3>
                  <p className="text-muted-foreground">
                    Celebrating our rich cultural heritage through music, dance,
                    and art.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#charity">
              <Card className="h-full hover:border-[#B7410E] transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                    <Landmark className="w-8 h-8 text-[#B7410E]" />
                  </div>
                  <h3 className="text-xl font-bold">Charity Drives</h3>
                  <p className="text-muted-foreground">
                    Zakat distribution and other charitable activities to help
                    those in need.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
              Host an Event
            </h2>
            <p className="text-lg mb-8">
              Are you interested in hosting a community event? We welcome
              initiatives from community members and can provide support in
              organizing and promoting your event.
            </p>
            <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
              Contact Us to Host an Event
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
