"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "../tabs-trigger";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RangrajSection() {
  const t = useTranslations("About");

  const communities = [
    {
      title: t("about-community-khari-ka-dhawa-title"),
      discription: t("about-community-khari-ka-dhawa-description"),
      value: "khari-ka-dhawa",
    },
    {
      title: t("about-community-mandariya-title"),
      discription: t("about-community-mandariya-description"),
      value: "mandariya",
    },
    {
      title: t("about-community-mewad-title"),
      discription: t("about-community-mewad-description"),
      value: "mewad",
    },
    {
      title: t("about-community-dhundhad-title"),
      discription: t("about-community-dhundhad-description"),
      value: "dhundhad",
    },
    {
      title: t("about-community-marwar-title"),
      discription: t("about-community-marwar-description"),
      value: "marwar",
    },
    {
      title: t("about-community-hadoti-title"),
      discription: t("about-community-hadoti-description"),
      value: "hadoti",
    },
    {
      title: t("about-community-shekhawati-title"),
      discription: t("about-community-shekhawati-description"),
      value: "shekhawati",
    },
    {
      title: t("about-community-malwa-title"),
      discription: t("about-community-malwa-description"),
      value: "malwa",
    },
    {
      title: t("about-community-baghelkhand-title"),
      discription: t("about-community-baghelkhand-description"),
      value: "baghelkhand",
    },
    {
      title: t("about-community-surti-title"),
      discription: t("about-community-surti-description"),
      value: "surti-rangrej",
    },
    {
      title: t("about-community-rohilkhand-title"),
      discription: t("about-community-rohilkhand-description"),
      value: "rohilkhand",
    },
    {
      title: t("about-community-awadhi-title"),
      discription: t("about-community-awadhi-description"),
      value: "awadhi-rangrej",
    },
    {
      title: t("about-community-delhi-punjab-haryana-title"),
      discription: t("about-community-delhi-punjab-haryana-description"),
      value: "delhi-punjab-haryana",
    },
    {
      title: t("about-community-bihar-jharkhand-title"),
      discription: t("about-community-bihar-jharkhand-description"),
      value: "bihar-jharkhand-rangrej",
    },
    {
      title: t("about-community-bengal-title"),
      discription: t("about-community-bengal-description"),
      value: "bengal-rangrej",
    },
    {
      title: t("about-community-deccan-title"),
      discription: t("about-community-deccan-description"),
      value: "deccan-rangrej",
    },
    {
      title: t("about-community-malabar-title"),
      discription: t("about-community-malabar-description"),
      value: "malabar-rangrej",
    },
    {
      title: t("about-community-tamil-title"),
      discription: t("about-community-tamil-description"),
      value: "tamil-rangrej",
    },
    {
      title: t("about-community-sindhi-title"),
      discription: t("about-community-sindhi-description"),
      value: "sindhi-rangrej",
    },
    {
      title: t("about-community-kashmir-title"),
      discription: t("about-community-kashmir-description"),
      value: "kashmir-rangrej",
    },
  ];

  const tabItems = [
    { label: t("about-tabitems-introduction"), value: "introduction" },
    { label: t("about-tabitems-history"), value: "history" },
    { label: t("about-tabitems-mission"), value: "mission" },
    { label: t("about-tabitems-key-members"), value: "members" },
    { label: t("about-tabitems-academy"), value: "academy" },
  ];

  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <section className="py-8 sm:py-12 md:py-16 ">
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
          <div className="hidden bg-rangrez-tab rounded sm:block mt-4">
            <TabsList className="grid gap-2 w-full grid-cols-5 mb-8">
              {tabItems.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="introduction" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl font-header sm:text-3xl font-bold mb-4 sm:mb-6 text-rangrez-indigo_dark">
                  {t("about-introduction-title")}
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {t("about-introduction-description")}
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {t("about-introduction-description-2")}
                </p>
                <p className="text-base sm:text-lg">
                  {t("about-introduction-description-3")}
                </p>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/image-11.jpg"
                  alt="Rangraj Samaj Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              <div className="col-span-full mt-8">
                <h2 className="text-lg font-semibold font-header mb-4">
                  {t("about-community-title")}
                </h2>
                {/* <Accordion
                  type="single"
                  collapsible
                  className="w-full border border-black rounded-md"
                >
                  {communities.map((section) => (
                    <AccordionItem key={section.value} value={section.value}>
                      <AccordionTrigger className="text-base font-medium px-4 py-2">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 text-sm text-muted-foreground">
                        {section.discription}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion> */}
                <Accordion type="single" collapsible className="w-full">
                  {communities.map((section) => (
                    <AccordionItem
                      key={section.value}
                      value={section.value}
                      className="border border-rangrez-turquoise rounded-md mb-2"
                    >
                      <AccordionTrigger className="text-base font-semibold px-4 py-2">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 text-sm text-muted-foreground">
                        {section.discription}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
                <h2 className="text-2xl font-header sm:text-3xl font-bold mb-4 sm:mb-6 text-rangrez-indigo_dark">
                  {/* Our Rich History */}
                  {t("about-history-title")}
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {/* The Rangraj community has a history dating back several
                  centuries, with our ancestors being master craftsmen in the
                  art of natural dyeing. Our community played a significant role
                  in the textile industry across various regions of India. */}
                  {t("about-history-description")}
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {/* Traditionally, Rangrez artisans were known for their knowledge
                  of natural dyes extracted from plants, minerals, and other
                  natural sources. This knowledge was passed down through
                  generations, creating a rich cultural heritage. */}
                  {t("about-history-description-2")}
                </p>
                <p className="text-base sm:text-lg">
                  {/* Over time, our community has evolved while maintaining our
                  cultural identity. The Rangraj Samaj organization was formally
                  established in 1975 to preserve our heritage and address the
                  changing needs of our community. */}
                  {t("about-history-description-3")}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6 sm:space-y-8">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2 className="text-2xl font-header sm:text-3xl font-bold mb-6 sm:mb-8 text-rangrez-indigo_dark">
                {/* Our Mission & Vision */}
                {t("about-mission-title")}
              </h2>

              <div className="mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 bg-[#F9F5E7] rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {/* Mission */}
                  {t("about-mission-title-1")}
                </h3>
                <p className="text-base sm:text-lg">
                  {/* To empower the Rangraj community through education,
                  healthcare, and social welfare initiatives while preserving
                  and promoting our rich cultural heritage and traditional
                  craftsmanship. */}
                  {t("about-mission-description-1")}
                </p>
              </div>

              <div className="mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 bg-[#F9F5E7] rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {/* Vision */}
                  {t("about-mission-title-2")}
                </h3>
                <p className="text-base sm:text-lg">
                  {/* A thriving Rangraj community that honors its heritage while
                  embracing progress, where every member has access to quality
                  education, healthcare, and opportunities for personal and
                  professional growth. */}
                  {t("about-mission-description-2")}
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                {/* Our Core Values */}
                {t("about-mission-core-title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <Card>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      {/* Community Service */}
                      {t("about-mission-core-title1")}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {/* Dedicated to serving the needs of our community with
                      compassion and integrity. */}
                      {t("about-mission-core-description-1")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      {/* Cultural Preservation */}
                      {t("about-mission-core-title2")}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {/* Committed to preserving and promoting our rich cultural
                      heritage and traditional crafts. */}
                      {t("about-mission-core-description-2")}
                    </p>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-2 md:col-span-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      {/* Empowerment */}
                      {t("about-mission-core-title3")}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {/* Focused on empowering community members through education,
                      healthcare, and economic opportunities. */}
                      {t("about-mission-core-description-3")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl font-header sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-rangrez-indigo_dark">
              {/* Key Members & Trustees */}
              {t("about-key-members-title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: t("about-key-key-member-title1"),
                  role: t("about-key-key-member-title1-role"),
                  bio: t("about-key-key-member-title1-bio"),
                },
                {
                  name: t("about-key-key-member-title2"),
                  role: t("about-key-key-member-title2-role"),
                  bio: t("about-key-key-member-title2-bio"),
                },
                {
                  name: t("about-key-key-member-title3"),
                  role: t("about-key-key-member-title3-role"),
                  bio: t("about-key-key-member-title3-bio"),
                },
                // {
                //   name: t("about-key-key-member-title4"),
                //   role: t("about-key-key-member-title4-role"),
                //   bio: t("about-key-key-member-title4-bio"),
                // },
                // {
                //   name: t("about-key-key-member-title5"),
                //   role: t("about-key-key-member-title5-role"),
                //   bio: t("about-key-key-member-title5-bio"),
                // },
                // {
                //   name: t("about-key-key-member-title6"),
                //   role: t("about-key-key-member-title6-role"),
                //   bio: t("about-key-key-member-title6-bio"),
                // },
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
                    <p className="text-[#0C2340] mb-2">{member.role}</p>
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
                  src="/images/academy.jpg"
                  alt="Rangraj Samaj Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-header sm:text-3xl font-bold mb-4 sm:mb-6 text-rangrez-indigo_dark">
                  {/* Rangrej Academy */}
                  {t("about-academy-title")}
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {/* Rangrej Academy School is a modern, values-driven educational
                  institution dedicated to nurturing young minds with knowledge,
                  creativity, and confidence. Located in a peaceful and
                  accessible area, Rangrej Academy combines traditional values
                  with modern teaching techniques to create a balanced and
                  enriching learning environment. */}
                  {t("about-academy-description")}
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {/* From foundational academics to co-curricular activities, the
                  school focuses on the all-round development of students. With
                  a team of qualified teachers, a student-first approach, and a
                  commitment to academic excellence, Rangrej Academy prepares
                  children not just for exams, but for life. */}
                  {t("about-academy-description-2")}
                </p>
                <p className="text-base sm:text-lg">
                  {/* The school fosters curiosity, discipline, cultural respect,
                  and leadership, making it an ideal place for students to grow
                  into responsible, thoughtful, and capable individuals. */}
                  {t("about-academy-description-3")}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
