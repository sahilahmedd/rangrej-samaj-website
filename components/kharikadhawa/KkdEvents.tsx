"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "../tabs-trigger";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function KkdEvents() {
  const t = useTranslations("Khari-ka-Dhawa");

  //   const communities = [
  //     {
  //       title: t("about-community-khari-ka-dhawa-title"),
  //       discription: "about-community-khari-ka-dhawa-description",
  //       value: "khari-ka-dhawa",
  //     },
  //     {
  //       title: t("about-community-mandariya-title"),
  //       discription: "about-community-mandariya-description",
  //       value: "mandariya",
  //     },
  //     {
  //       title: t("about-community-mewad-title"),
  //       discription: "about-community-mewad-description",
  //       value: "mewad",
  //     },
  //     {
  //       title: t("about-community-dhundhad-title"),
  //       discription: "about-community-dhundhad-description",
  //       value: "dhundhad",
  //     },
  //     {
  //       title: t("about-community-marwar-title"),
  //       discription: "about-community-marwar-description",
  //       value: "marwar",
  //     },
  //     {
  //       title: t("about-community-hadoti-title"),
  //       discription: "about-community-hadoti-description",
  //       value: "hadoti",
  //     },
  //     {
  //       title: t("about-community-shekhawati-title"),
  //       discription: "about-community-shekhawati-description",
  //       value: "shekhawati",
  //     },
  //     {
  //       title: t("about-community-malwa-title"),
  //       discription: "about-community-malwa-description",
  //       value: "malwa",
  //     },
  //     {
  //       title: t("about-community-baghelkhand-title"),
  //       discription: "about-community-baghelkhand-description",
  //       value: "baghelkhand",
  //     },
  //     {
  //       title: t("about-community-surti-title"),
  //       discription: "about-community-surti-description",
  //       value: "surti-rangrej",
  //     },
  //     {
  //       title: t("about-community-rohilkhand-title"),
  //       discription: "about-community-rohilkhand-description",
  //       value: "rohilkhand",
  //     },
  //     {
  //       title: t("about-community-awadhi-title"),
  //       discription: "about-community-awadhi-description",
  //       value: "awadhi-rangrej",
  //     },
  //     {
  //       title: t("about-community-delhi-punjab-haryana-title"),
  //       discription: "about-community-delhi-punjab-haryana-description",
  //       value: "delhi-punjab-haryana",
  //     },
  //     {
  //       title: t("about-community-bihar-jharkhand-title"),
  //       discription: "about-community-bihar-jharkhand-description",
  //       value: "bihar-jharkhand-rangrej",
  //     },
  //     {
  //       title: t("about-community-bengal-title"),
  //       discription: "about-community-bengal-description",
  //       value: "bengal-rangrej",
  //     },
  //     {
  //       title: t("about-community-deccan-title"),
  //       discription: "about-community-deccan-description",
  //       value: "deccan-rangrej",
  //     },
  //     {
  //       title: t("about-community-malabar-title"),
  //       discription: "about-community-malabar-description",
  //       value: "malabar-rangrej",
  //     },
  //     {
  //       title: t("about-community-tamil-title"),
  //       discription: "about-community-tamil-description",
  //       value: "tamil-rangrej",
  //     },
  //     {
  //       title: t("about-community-sindhi-title"),
  //       discription: "about-community-sindhi-description",
  //       value: "sindhi-rangrej",
  //     },
  //     {
  //       title: t("about-community-kashmir-title"),
  //       discription: "about-community-kashmir-description",
  //       value: "kashmir-rangrej",
  //     },
  //   ];

  const tabItems = [
    { label: t("tab-title1"), value: "present" },
    { label: t("tab-title2"), value: "past" },
    // { label: t("tab-title3"), value: "2023" },
  ];

  const [activeTab, setActiveTab] = useState("present");

  return (
    <section className="py-8 sm:py-12 md:py-16 ">
      <p className="container font-body mb-10 px-4 md:px-8">
        {t("page-discription")}
      </p>
      <div className="container px-4 md:px-6">
        {/* Mobile Header */}
        <ResponsiveTabHeader
          tabs={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tabs: always rendered */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row gap-8 mt-6">
            {/* Tabs on the left side */}
            <div className="sm:w-1/4 p-4 rounded">
              <div className="sticky top-40 z-99">
                <TabsList className="flex sm:flex-col gap-2 w-auto">
                  {tabItems.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="w-full py-3 justify-start"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {/* Tab Content on the right side */}
            <div className="flex-1">
              <TabsContent value="present" className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                  <div>
                    <h2 className="text-2xl font-header sm:text-3xl font-bold mb-4 sm:mb-6 text-rangrez-indigo_dark">
                      {t("member-title")}
                    </h2>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      {t("leadership-discription-1")}
                    </p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      <strong>President:</strong> {t("present-president")}
                    </p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      <strong>Secretary: </strong> {t("present-secretary")}
                    </p>
                    <p className="text-base sm:text-lg">
                      <strong>Cashier: </strong> {t("present-cashier")}
                    </p>
                  </div>
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/image-11.jpg"
                      alt="Rangrez Samaj Community"
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold font-header mb-5">
                      {t("achievements-title")}
                    </h2>
                    <p className="text-gray-400 font-bold">
                      {t("not-available")}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="past" className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                  <div>
                    <h2 className="text-2xl font-header sm:text-3xl font-bold mb-4 sm:mb-6 text-rangrez-indigo_dark">
                      {t("member-title")}
                    </h2>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      {t("leadership-discription-2")}
                    </p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      <strong>President:</strong> {t("previous-president")}
                    </p>
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">
                      <strong>Secretary: </strong> {t("previous-secretary")}
                    </p>
                    <p className="text-base sm:text-lg">
                      <strong>Cashier: </strong> {t("previous-cashier")}
                    </p>
                  </div>
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/image-11.jpg"
                      alt="Rangrez Samaj Community"
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold font-header mb-5">
                      {t("achievements-title")}
                    </h2>
                    <p className="">
                      <span className="font-bold text-xl px-4">-</span>
                      {`${t("achievements-list-1")}`}
                    </p>
                    <p className="">
                      <span className="font-bold text-xl px-4">-</span>
                      {`${t("achievements-list-2")}`}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
