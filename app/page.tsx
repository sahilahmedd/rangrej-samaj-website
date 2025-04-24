import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Heart, Users, Landmark, ArrowRight } from "lucide-react"
import EventSlider from "@/components/event-slider"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Rangraj Samaj Cultural Image"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Serving Humanity, Preserving Culture
          </h1>
          <p className="text-xl text-white/90 max-w-[800px]">
            Empowering and uniting the Rangraj (Rangrez) Samaj through health initiatives, charity, marriage meets, and
            cultural awareness.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button size="lg" className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
              Join Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              Attend Next Event
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#F2C94C]/20 hover:border-[#F2C94C] transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Health Support</h3>
                <p className="text-muted-foreground">
                  Free medical camps, treatments, and health awareness programs for our community.
                </p>
                <Link href="/initiatives#health" className="text-[#B7410E] flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20 hover:border-[#F2C94C] transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Zakat & Donations</h3>
                <p className="text-muted-foreground">
                  Supporting the needy through charitable donations and zakat distribution.
                </p>
                <Link href="/donation" className="text-[#B7410E] flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20 hover:border-[#F2C94C] transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Vivah Sammelan</h3>
                <p className="text-muted-foreground">
                  Marriage meets to help community members find suitable life partners.
                </p>
                <Link href="/events#vivah" className="text-[#B7410E] flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20 hover:border-[#F2C94C] transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <CalendarDays className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Upcoming Events</h3>
                <p className="text-muted-foreground">
                  Stay updated with our community gatherings, cultural programs, and more.
                </p>
                <Link href="/events" className="text-[#B7410E] flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">About Rangraj Samaj</h2>
              <p className="text-lg mb-4">
                The Rangraj (Rangrez) Samaj is a vibrant community with a rich cultural heritage in textile dyeing and
                craftsmanship. Our community has been preserving traditional art forms while adapting to modern
                challenges.
              </p>
              <p className="text-lg mb-6">
                Today, we focus on empowering our community through education, healthcare, cultural preservation, and
                social welfare initiatives.
              </p>
              <Button asChild className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Rangraj Samaj Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Our Events</h2>
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
                    description: "Free health check-ups including general health, eye, and dental examinations.",
                  },
                  {
                    id: 3,
                    title: "Cultural Festival",
                    date: "July 22, 2025",
                    location: "Central Park, Jaipur",
                    image: "/placeholder.svg?height=400&width=600",
                    description: "Celebrating our rich cultural heritage with music, dance, and traditional crafts.",
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
                    description: "Successfully distributed zakat to over 200 families in need across 5 cities.",
                  },
                  {
                    id: 5,
                    title: "Youth Leadership Workshop",
                    date: "February 18, 2025",
                    location: "Rangraj Community Center, Ahmedabad",
                    image: "/placeholder.svg?height=400&width=600",
                    description: "Empowering the next generation with leadership skills and community values.",
                  },
                  {
                    id: 6,
                    title: "Winter Clothing Distribution",
                    date: "January 10, 2025",
                    location: "Various Locations",
                    image: "/placeholder.svg?height=400&width=600",
                    description: "Provided warm clothing to underprivileged children and elderly community members.",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
          <div className="text-center mt-8">
            <Button asChild className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Community Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-2 border-[#F2C94C]/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=P${i}`}
                        alt="Person"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Community Member {i}</h4>
                      <p className="text-sm text-muted-foreground">Beneficiary</p>
                    </div>
                  </div>
                  <p className="italic">
                    "The support from Rangraj Samaj has been life-changing for my family. The medical assistance helped
                    us during a difficult time, and we are forever grateful."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#B7410E]">
        <div className="container px-4 md:px-6">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}
