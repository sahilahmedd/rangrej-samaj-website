import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Rangraj Samaj"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">About Rangraj Samaj</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="introduction" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="introduction">Introduction</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="members">Key Members</TabsTrigger>
            </TabsList>

            <TabsContent value="introduction" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">Introduction to Rangraj Samaj</h2>
                  <p className="text-lg mb-4">
                    The Rangraj (Rangrez) Samaj is a vibrant community with a rich cultural heritage in textile dyeing
                    and craftsmanship. Our community has been preserving traditional art forms while adapting to modern
                    challenges.
                  </p>
                  <p className="text-lg mb-4">
                    The word "Rangraj" comes from "Rang" meaning color and "Raj" meaning master, reflecting our
                    community's historical expertise in the art of dyeing textiles with vibrant, long-lasting colors.
                  </p>
                  <p className="text-lg">
                    Today, we focus on empowering our community through education, healthcare, cultural preservation,
                    and social welfare initiatives.
                  </p>
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
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Rangraj Samaj History"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">Our Rich History</h2>
                  <p className="text-lg mb-4">
                    The Rangraj community has a history dating back several centuries, with our ancestors being master
                    craftsmen in the art of natural dyeing. Our community played a significant role in the textile
                    industry across various regions of India.
                  </p>
                  <p className="text-lg mb-4">
                    Traditionally, Rangrez artisans were known for their knowledge of natural dyes extracted from
                    plants, minerals, and other natural sources. This knowledge was passed down through generations,
                    creating a rich cultural heritage.
                  </p>
                  <p className="text-lg">
                    Over time, our community has evolved while maintaining our cultural identity. The Rangraj Samaj
                    organization was formally established in 1975 to preserve our heritage and address the changing
                    needs of our community.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mission" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-[#8B3103]">Our Mission & Vision</h2>

                <div className="mb-12 p-8 bg-[#F9F5E7] rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-lg">
                    To empower the Rangraj community through education, healthcare, and social welfare initiatives while
                    preserving and promoting our rich cultural heritage and traditional craftsmanship.
                  </p>
                </div>

                <div className="mb-12 p-8 bg-[#F9F5E7] rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-lg">
                    A thriving Rangraj community that honors its heritage while embracing progress, where every member
                    has access to quality education, healthcare, and opportunities for personal and professional growth.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-xl mb-2">Community Service</h4>
                      <p>Dedicated to serving the needs of our community with compassion and integrity.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-xl mb-2">Cultural Preservation</h4>
                      <p>Committed to preserving and promoting our rich cultural heritage and traditional crafts.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-xl mb-2">Empowerment</h4>
                      <p>
                        Focused on empowering community members through education, healthcare, and economic
                        opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="members" className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#8B3103]">Key Members & Trustees</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Rajesh Rangwala",
                    role: "President",
                    bio: "Leading the organization since 2018 with a focus on community development and cultural preservation.",
                  },
                  {
                    name: "Priya Rangrez",
                    role: "Vice President",
                    bio: "Spearheading educational initiatives and women's empowerment programs within the community.",
                  },
                  {
                    name: "Amir Khan",
                    role: "Secretary",
                    bio: "Coordinating community events and managing administrative functions of the organization.",
                  },
                  {
                    name: "Dr. Sanjay Raj",
                    role: "Health Program Director",
                    bio: "Overseeing all health initiatives and medical camps for the community.",
                  },
                  {
                    name: "Fatima Begum",
                    role: "Treasurer",
                    bio: "Managing financial affairs and ensuring transparent use of community funds.",
                  },
                  {
                    name: "Vikram Singh",
                    role: "Cultural Affairs Director",
                    bio: "Preserving and promoting the rich cultural heritage of the Rangraj community.",
                  },
                ].map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${member.name.charAt(0)}`}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-[#B7410E] mb-2">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#B7410E] mb-2">5,000+</div>
              <p className="text-lg">Community Members Supported</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#B7410E] mb-2">200+</div>
              <p className="text-lg">Successful Marriages Arranged</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#B7410E] mb-2">50+</div>
              <p className="text-lg">Health Camps Conducted</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#B7410E] mb-2">₹1Cr+</div>
              <p className="text-lg">Zakat & Donations Distributed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
