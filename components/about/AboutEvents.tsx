"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const tabItems = [
  { label: "Introduction", value: "introduction" },
  { label: "History", value: "history" },
  { label: "Mission & Vision", value: "mission" },
  { label: "Key Members", value: "members" },
  { label: "Academy", value: "academy" },
];

export default function RangrajSection() {
  const [activeTab, setActiveTab] = useState("introduction");

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
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {tabItems.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="introduction" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#8B3103]">
                  Introduction to Rangraj Samaj
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  The Rangraj (Rangrez) Samaj is a vibrant community with a rich
                  cultural heritage in textile dyeing and craftsmanship. Our
                  community has been preserving traditional art forms while
                  adapting to modern challenges.
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  The word "Rangraj" comes from "Rang" meaning color and "Raj"
                  meaning master, reflecting our community's historical
                  expertise in the art of dyeing textiles with vibrant,
                  long-lasting colors.
                </p>
                <p className="text-base sm:text-lg">
                  Today, we focus on empowering our community through education,
                  healthcare, cultural preservation, and social welfare
                  initiatives.
                </p>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  // src="/placeholder.svg?height=800&width=600"
                  src="/images/image-11.jpg"
                  alt="Rangraj Samaj Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
                <Image
                  // src="/placeholder.svg?height=800&width=600"
                  src="/images/image-12.jpg"
                  alt="Rangraj Samaj History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#8B3103]">
                  Our Rich History
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  The Rangraj community has a history dating back several
                  centuries, with our ancestors being master craftsmen in the
                  art of natural dyeing. Our community played a significant role
                  in the textile industry across various regions of India.
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  Traditionally, Rangrez artisans were known for their knowledge
                  of natural dyes extracted from plants, minerals, and other
                  natural sources. This knowledge was passed down through
                  generations, creating a rich cultural heritage.
                </p>
                <p className="text-base sm:text-lg">
                  Over time, our community has evolved while maintaining our
                  cultural identity. The Rangraj Samaj organization was formally
                  established in 1975 to preserve our heritage and address the
                  changing needs of our community.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6 sm:space-y-8">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#8B3103]">
                Our Mission & Vision
              </h2>

              <div className="mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 bg-[#F9F5E7] rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Mission
                </h3>
                <p className="text-base sm:text-lg">
                  To empower the Rangraj community through education,
                  healthcare, and social welfare initiatives while preserving
                  and promoting our rich cultural heritage and traditional
                  craftsmanship.
                </p>
              </div>

              <div className="mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 bg-[#F9F5E7] rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Vision
                </h3>
                <p className="text-base sm:text-lg">
                  A thriving Rangraj community that honors its heritage while
                  embracing progress, where every member has access to quality
                  education, healthcare, and opportunities for personal and
                  professional growth.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <Card>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      Community Service
                    </h4>
                    <p className="text-sm sm:text-base">
                      Dedicated to serving the needs of our community with
                      compassion and integrity.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      Cultural Preservation
                    </h4>
                    <p className="text-sm sm:text-base">
                      Committed to preserving and promoting our rich cultural
                      heritage and traditional crafts.
                    </p>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-2 md:col-span-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      Empowerment
                    </h4>
                    <p className="text-sm sm:text-base">
                      Focused on empowering community members through education,
                      healthcare, and economic opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#8B3103]">
              Key Members & Trustees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${member.name.charAt(
                        0
                      )}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-[#B7410E] mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academy" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Rangraj Samaj History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#8B3103]">
                  Rangrej Academy
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  Rangrej Academy School is a modern, values-driven educational
                  institution dedicated to nurturing young minds with knowledge,
                  creativity, and confidence. Located in a peaceful and
                  accessible area, Rangrej Academy combines traditional values
                  with modern teaching techniques to create a balanced and
                  enriching learning environment.
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  From foundational academics to co-curricular activities, the
                  school focuses on the all-round development of students. With
                  a team of qualified teachers, a student-first approach, and a
                  commitment to academic excellence, Rangrej Academy prepares
                  children not just for exams, but for life.
                </p>
                <p className="text-base sm:text-lg">
                  The school fosters curiosity, discipline, cultural respect,
                  and leadership, making it an ideal place for students to grow
                  into responsible, thoughtful, and capable individuals.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
