"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "../tabs-trigger";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import DonationModal from "../DonationModal";

export default function InitTabs() {
  const t = useTranslations("Initiatives");
  const locale = useLocale()

  const tabItems = [
    { label: t("initiatives-tabitems-medical-aid"), value: "health" },
    { label: t("initiatives-tabitems-zakat-distribution"), value: "zakat" },
    { label: t("initiatives-tabitems-vivah-sammelan"), value: "nikah" },
    {
      label: t("initiatives-tabitems-educational-support"),
      value: "education",
    },
  ];

  const [activeTab, setActiveTab] = useState("health");

  return (
    <section className="py-8 sm:py-12 md:py-16">
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
            <TabsList className="grid gap-2 w-full grid-cols-4">
              {tabItems.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="health" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/medical1.jpg"
                  alt="Medical Aid Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-rangrez-sand_hover/10 px-3 py-1 text-sm text-[#0C2340] mb-4">
                  {/* Health Initiative */}
                  {t("initiatives-Health-Initiative")}
                </div>
                <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
                  {/* Medical Aid Program */}
                  {t("initiatives-Medical")}
                </h2>
                <p className="text-lg mb-4">
                  {/* Our Medical Aid Program aims to provide accessible healthcare
                  services to all members of our community, especially those who
                  cannot afford quality medical care. */}
                  {t("initiatives-medical-description")}
                </p>
                <p className="text-lg mb-4">
                  {/* Through this initiative, we offer: */}
                  {t("initiatives-Medical-offer")}
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    {/* Free medical check-up camps in various locations */}
                    {t("initiatives-Medical-offer1")}
                  </li>
                  <li>
                    {/* Financial assistance for critical medical treatments */}
                    {t("initiatives-Medical-offer2")}
                  </li>
                  <li>
                    {/* Subsidized medicines for chronic conditions */}
                    {t("initiatives-Medical-offer3")}
                  </li>
                  <li>
                    {/* Health awareness programs and workshops */}
                    {t("initiatives-Medical-offer4")}
                  </li>
                  <li>
                    {/* Tie-ups with hospitals for discounted treatments */}
                    {t("initiatives-Medical-offer5")}
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white">
                    {/* Apply for Medical Aid */}
                    <Link href={`/${locale}/contact`}>{t("initiatives-Medical-button1")}</Link>
                  </Button>
                  <Button variant="outline" className="border-2 border-rangrez-indigo_dark duration-300 ease-in hover:bg-rangrez-indigo_dark hover:text-white">
                    {/* Volunteer for Health Camps */}
                    <Link href={`/${locale}/contact`}>{t("initiatives-Medical-button2")}</Link>
                    
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-rangrez-indigo_dark">
                {/* Recent Health Camps */}
                {t("initiatives-Medical-camps")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/images/medical2.jpg`}
                        alt={`Health Camp ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">
                        {/* Health Check-up Camp {i} */}
                        {t("initiatives-Medical-camps1-title")} {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {/* March {i * 5}, 2025 | Mumbai */}
                        {i * 5} {t("initiatives-Medical-camps1-date")}
                      </p>
                      <p className="text-muted-foreground">
                        {/* Provided free health check-ups to over 200 community
                        members, including general health, eye, and dental
                        examinations. */}
                        {t("initiatives-Medical-camps1-description")}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {/* Impact Statistics */}
                {t("initiatives-medical-Impact-title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">50+</div>
                  <p>
                    {/* Health Camps Conducted */}
                    {t("initiatives-medical-Impact-Camps")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">
                    5,000+
                  </div>
                  <p>
                    {/* People Benefited */}
                    {t("initiatives-medical-Impact-Benefited")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">₹50L+</div>
                  <p>
                    {/* Medical Aid Distributed */}
                    {t("initiatives-medical-Impact-Distributed")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">20+</div>
                  <p>
                    {/* Hospital Partnerships */}
                    {t("initiatives-medical-Impact-Partnerships")}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="zakat" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-rangrez-sand_hover/10 px-3 py-1 text-sm text-[#0C2340] mb-4">
                  {/* Charity Initiative */}
                  {t("initiatives-Zakat-Initiative")}
                </div>
                <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
                  {/* Zakat Distribution */}
                  {t("initiatives-Zakat")}
                </h2>
                <p className="text-lg mb-4">
                  {/* Zakat is one of the five pillars of Islam, requiring Muslims
                  to give 2.5% of their qualifying wealth to those in need. Our
                  Zakat Distribution program ensures that these funds reach the
                  most deserving members of our community. */}
                  {t("initiatives-Zakat-description")}
                </p>
                <p className="text-lg mb-4">
                  {/* Our Zakat Distribution covers: */}
                  {t("initiatives-Zakat-Distribution")}
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    {/* Financial assistance to poor families */}
                    {t("initiatives-Zakat-Distribution1")}
                  </li>
                  <li>
                    {/* Educational scholarships for deserving students */}
                    {t("initiatives-Zakat-Distribution2")}
                  </li>
                  <li>
                    {/* Medical treatment for those who cannot afford it */}
                    {t("initiatives-Zakat-Distribution3")}
                  </li>
                  <li>
                    {/* Support for widows and orphans */}
                    {t("initiatives-Zakat-Distribution4")}
                  </li>
                  <li>
                    {/* Aid for those in debt due to genuine needs */}
                    {t("initiatives-Zakat-Distribution5")}
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  {/* <Button className="bg-[#0C2340] hover:bg-rangrez-indigo_dark text-white">
                    Contribute Zakat
                    {t("initiatives-Zakat-button1")}
                  </Button> */}
                  <DonationModal lable={`${t("donation-model-lable-1")}`} />
                  {/* <Button variant="outline">
                    Apply for Zakat Assistance
                    {t("initiatives-Zakat-button2")}
                  </Button> */}
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
                <Image
                  src="/images/zakat1.png"
                  alt="Zakat Distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-rangrez-indigo_dark">
                {/* Recent Zakat Distributions */}
                {t("initiatives-Zakat-Recent-Distributions")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/images/zakat1.jpg`}
                        alt={`Zakat Distribution ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">
                        {/* Zakat Distribution Drive {i} */}
                        {t("initiatives-Zakat-Distributions")} {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {/* February {i * 5}, 2025 | Multiple Locations */}
                        {i * 5} {t("initiatives-Zakat-Distributions-Date")}
                      </p>
                      <p className="text-muted-foreground">
                        {/* Distributed Zakat funds to 100+ families, providing
                        financial assistance for basic needs, education, and
                        medical treatments. */}
                        {t("initiatives-Zakat-Distributions-description")}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {/* Impact Statistics */}
                {t("initiatives-Zakat-Distributions-Impact-title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">₹1Cr+</div>
                  <p>
                    {/* Zakat Collected */}
                    {t("initiatives-Zakat-Distributions-Impact-Amount")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">
                    1,000+
                  </div>
                  <p>
                    {/* Families Supported */}
                    {t("initiatives-Zakat-Distributions-Impact-Families")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">200+</div>
                  <p>
                    {/* Students Sponsored */}
                    {t("initiatives-Zakat-Distributions-Impact-Students")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">50+</div>
                  <p>
                    {/* Medical Treatments Funded */}
                    {t("initiatives-Zakat-Distributions-Impact-Medical")}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nikah" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/nikkah1.png"
                  alt="Nikah Sammelan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-rangrez-sand_hover/10 px-3 py-1 text-sm text-[#0C2340] mb-4">
                  {/* Community Initiative */}
                  {t("initiatives-nikah-Initiative")}
                </div>
                <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
                  {/* Nikah Sammelan */}
                  {t("initiatives-nikah")}
                </h2>
                <p className="text-lg mb-4">
                  {/* Our Nikah Sammelan (Marriage Meet) initiative aims to help
                  eligible candidates from the Rangrez community find suitable
                  life partners in a respectful and organized environment. */}
                  {t("initiatives-nikah-description")}
                </p>
                <p className="text-lg mb-4">
                  {/* Features of our Nikah Sammelan: */}
                  {t("initiatives-nikah-Features1")}
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    {/* Carefully screened and verified profiles */}
                    {t("initiatives-nikah-Features1")}
                  </li>
                  <li>
                    {/* Organized meetings in a dignified setting */}
                    {t("initiatives-nikah-Features2")}
                  </li>
                  <li>
                    {/* Biodata sharing and introduction facilitation */}
                    {t("initiatives-nikah-Features3")}
                  </li>
                  <li>
                    {/* Privacy and respect for all participants */}
                    {t("initiatives-nikah-Features4")}
                  </li>
                  <li>
                    {/* Financial assistance for marriages of underprivileged
                    families */}
                    {t("initiatives-nikah-Features5")}
                  </li>
                </ul>
                {/* <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#0C2340] hover:bg-rangrez-indigo_dark text-white">
                   
                    {t("initiatives-nikah-button1")}
                  </Button>
                  <Button variant="outline">
                   
                    {t("initiatives-nikah-button2")}
                    </Button>
                </div> */}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-header font-bold mb-6 text-rangrez-indigo_dark">
                {/* Upcoming Nikah Sammelan */}
                {t("initiatives-nikah-upcoming")}
              </h3>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=NextSammelan"
                      alt="Next Nikah Sammelan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h4 className="font-bold text-xl mb-2">
                      {/* Annual Nikah Sammelan 2025 */}
                      {t("initiatives-nikah-upcoming-title")}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {/* Date: May 15, 2025 */}
                      {t("initiatives-nikah-upcoming-date")}
                      <br />
                      {/* Time: 10:00 AM - 6:00 PM */}
                      {t("initiatives-nikah-upcoming-time")}
                      <br />
                      {/* Venue: Rangrez Community Hall, Mumbai */}
                      {t("initiatives-nikah-upcoming-Venue")}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {/* Our annual marriage meet bringing together eligible
                      candidates from the Rangrez community. Registration is now
                      open for candidates and families. */}
                      {t("initiatives-nikah-upcoming-description")}
                    </p>
                    <Button className="w-full md:w-auto bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white">
                      {/* Register Now */}
                      {t("initiatives-nikah-upcoming-button")}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Success Stories
                {t("initiatives-nikah-Success-title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-2 border-rangrez-sand_hover/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0C2340]/10 overflow-hidden relative">
                          <Image
                            src={`/placeholder.svg?height=100&width=100&text=C${i}`}
                            alt="Couple"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">
                            {t("initiatives-nikah-Success")} {i}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("initiatives-nikah-Success-Date")} 202{i}
                          </p>
                        </div>
                      </div>
                      <p className="italic">
                        {t("initiatives-nikah-Success-description")}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-rangrez-sand_hover/10 px-3 py-1 text-sm text-[#0C2340] mb-4">
                  {/* Education Initiative */}
                  {t("education-initiative")}
                </div>
                <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
                  {/* Educational Support */}
                  {t("educational-support")}
                </h2>
                <p className="text-lg mb-4">
                  {/* Education is the foundation for a better future. Our
                  Educational Support initiative aims to ensure that every child
                  in our community has access to quality education, regardless
                  of their financial background. */}
                  {t("educational-support-description1")}
                </p>
                <p className="text-lg mb-4">
                  {/* Our educational programs include: */}
                  {t("educational-support-description2")}
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    {/* Scholarships for deserving students */}
                    {t("educational-support-list1")}
                  </li>
                  <li>
                    {/* Financial assistance for higher education */}
                    {t("educational-support-list2")}
                  </li>
                  <li>
                    {/* Career guidance and counseling */}
                    {t("educational-support-list3")}
                  </li>
                  <li>
                    {/* Skill development workshops */}
                    {t("educational-support-list4")}
                  </li>
                  <li>
                    {/* Educational materials and resources */}
                    {t("educational-support-list5")}
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  {/* <Button className="bg-[#0C2340] hover:bg-rangrez-indigo_dark text-white">
                    {t("apply-scholarship-button")}
                  </Button> */}
                  {/* <Button variant="outline">
                    {t("donate-education-button")}
                  </Button> */}
                  <DonationModal lable={`${t("donate-education-button")}`} />
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
                <Image
                  src="/images/education1.png"
                  alt="Educational Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-rangrez-indigo_dark">
                {/* Scholarship Recipients */}
                {t("scholarship-recipients-title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/images/student1.jpg`}
                        alt={`Student ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">
                        {/* Student {i} */}
                        {t("student-name")} {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {/* Pursuing: */}
                        {t("student-pursuing")}
                        {["Engineering", "Medicine", "Computer Science"][i - 1]}
                      </p>
                      <p className="text-muted-foreground">
                        {/* "The scholarship from Rangrez Samaj has been
                        instrumental in helping me pursue my dream of becoming a{" "}
                        {["engineer", "doctor", "software developer"][i - 1]}.
                        I'm grateful for this support." */}
                        {t("student-quote")}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {/* Impact Statistics */}
                {t("impact-statistics-title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">500+</div>
                  <p>
                    {/* Scholarships Awarded */}
                    {t("impact-statistics1")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">₹50L+</div>
                  <p>
                    {/* Educational Aid Distributed */}
                    {t("impact-statistics2")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">100+</div>
                  <p>
                    {/* Professional Graduates */}
                    {t("impact-statistics3")}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#0C2340]">20+</div>
                  <p>
                    {/* Career Workshops */}
                    {t("impact-statistics4")}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
