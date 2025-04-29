// import React from 'react'
// import { Card, CardContent } from '../ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from '../ui/button'
// import Image from 'next/image'

// const InitTabs = () => {
//   return (
//     <section className="py-16 bg-white">
//     <div className="container px-4 md:px-6">
//       <Tabs defaultValue="health" className="w-full">
//         <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
//           <TabsTrigger value="health" id="health">
//             Medical Aid
//           </TabsTrigger>
//           <TabsTrigger value="zakat" id="zakat">
//             Zakat Distribution
//           </TabsTrigger>
//           <TabsTrigger value="vivah" id="vivah">
//             Vivah Sammelan
//           </TabsTrigger>
//           <TabsTrigger value="education" id="education">
//             Education
//           </TabsTrigger>
//         </TabsList>

// <TabsContent value="health" className="space-y-8">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     <div className="relative h-[400px] rounded-lg overflow-hidden">
//       <Image
//         src="/placeholder.svg?height=800&width=600&text=Medical"
//         alt="Medical Aid Initiative"
//         fill
//         className="object-cover"
//       />
//     </div>
//     <div>
//       <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
//         Health Initiative
//       </div>
//       <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
//         Medical Aid Program
//       </h2>
//       <p className="text-lg mb-4">
//         Our Medical Aid Program aims to provide accessible
//         healthcare services to all members of our community,
//         especially those who cannot afford quality medical care.
//       </p>
//       <p className="text-lg mb-4">
//         Through this initiative, we offer:
//       </p>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Free medical check-up camps in various locations</li>
//         <li>
//           Financial assistance for critical medical treatments
//         </li>
//         <li>Subsidized medicines for chronic conditions</li>
//         <li>Health awareness programs and workshops</li>
//         <li>Tie-ups with hospitals for discounted treatments</li>
//       </ul>
//       <div className="flex flex-wrap gap-4">
//         <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
//           Apply for Medical Aid
//         </Button>
//         <Button variant="outline">
//           Volunteer for Health Camps
//         </Button>
//       </div>
//     </div>
//   </div>

//   <div className="mt-12">
//     <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
//       Recent Health Camps
//     </h3>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[1, 2, 3].map((i) => (
//         <Card key={i} className="overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src={`/placeholder.svg?height=300&width=400&text=Camp${i}`}
//               alt={`Health Camp ${i}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <CardContent className="p-6">
//             <h4 className="font-bold text-lg mb-2">
//               Health Check-up Camp {i}
//             </h4>
//             <p className="text-sm text-muted-foreground mb-2">
//               March {i * 5}, 2025 | Mumbai
//             </p>
//             <p className="text-muted-foreground">
//               Provided free health check-ups to over 200 community
//               members, including general health, eye, and dental
//               examinations.
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>

//   <div className="bg-[#F9F5E7] p-6 rounded-lg">
//     <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">50+</div>
//         <p>Health Camps Conducted</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           5,000+
//         </div>
//         <p>People Benefited</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           ₹50L+
//         </div>
//         <p>Medical Aid Distributed</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">20+</div>
//         <p>Hospital Partnerships</p>
//       </div>
//     </div>
//   </div>
// </TabsContent>

// <TabsContent value="zakat" className="space-y-8">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     <div>
//       <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
//         Charity Initiative
//       </div>
//       <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
//         Zakat Distribution
//       </h2>
//       <p className="text-lg mb-4">
//         Zakat is one of the five pillars of Islam, requiring Muslims
//         to give 2.5% of their qualifying wealth to those in need.
//         Our Zakat Distribution program ensures that these funds
//         reach the most deserving members of our community.
//       </p>
//       <p className="text-lg mb-4">Our Zakat Distribution covers:</p>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Financial assistance to poor families</li>
//         <li>Educational scholarships for deserving students</li>
//         <li>Medical treatment for those who cannot afford it</li>
//         <li>Support for widows and orphans</li>
//         <li>Aid for those in debt due to genuine needs</li>
//       </ul>
//       <div className="flex flex-wrap gap-4">
//         <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
//           Contribute Zakat
//         </Button>
//         <Button variant="outline">
//           Apply for Zakat Assistance
//         </Button>
//       </div>
//     </div>
//     <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
//       <Image
//         src="/placeholder.svg?height=800&width=600&text=Zakat"
//         alt="Zakat Distribution"
//         fill
//         className="object-cover"
//       />
//     </div>
//   </div>

//   <div className="mt-12">
//     <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
//       Recent Zakat Distributions
//     </h3>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[1, 2, 3].map((i) => (
//         <Card key={i} className="overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src={`/placeholder.svg?height=300&width=400&text=Zakat${i}`}
//               alt={`Zakat Distribution ${i}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <CardContent className="p-6">
//             <h4 className="font-bold text-lg mb-2">
//               Zakat Distribution Drive {i}
//             </h4>
//             <p className="text-sm text-muted-foreground mb-2">
//               February {i * 5}, 2025 | Multiple Locations
//             </p>
//             <p className="text-muted-foreground">
//               Distributed Zakat funds to 100+ families, providing
//               financial assistance for basic needs, education, and
//               medical treatments.
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>

//   <div className="bg-[#F9F5E7] p-6 rounded-lg">
//     <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           ₹1Cr+
//         </div>
//         <p>Zakat Collected</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           1,000+
//         </div>
//         <p>Families Supported</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           200+
//         </div>
//         <p>Students Sponsored</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">50+</div>
//         <p>Medical Treatments Funded</p>
//       </div>
//     </div>
//   </div>
// </TabsContent>

// <TabsContent value="vivah" className="space-y-8">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     <div className="relative h-[400px] rounded-lg overflow-hidden">
//       <Image
//         src="/placeholder.svg?height=800&width=600&text=Vivah"
//         alt="Vivah Sammelan"
//         fill
//         className="object-cover"
//       />
//     </div>
//     <div>
//       <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
//         Community Initiative
//       </div>
//       <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
//         Vivah Sammelan
//       </h2>
//       <p className="text-lg mb-4">
//         Our Vivah Sammelan (Marriage Meet) initiative aims to help
//         eligible candidates from the Rangraj community find suitable
//         life partners in a respectful and organized environment.
//       </p>
//       <p className="text-lg mb-4">
//         Features of our Vivah Sammelan:
//       </p>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Carefully screened and verified profiles</li>
//         <li>Organized meetings in a dignified setting</li>
//         <li>Biodata sharing and introduction facilitation</li>
//         <li>Privacy and respect for all participants</li>
//         <li>
//           Financial assistance for marriages of underprivileged
//           families
//         </li>
//       </ul>
//       <div className="flex flex-wrap gap-4">
//         <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
//           Register for Next Sammelan
//         </Button>
//         <Button variant="outline">Submit Your Profile</Button>
//       </div>
//     </div>
//   </div>

//   <div className="mt-12">
//     <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
//       Upcoming Vivah Sammelan
//     </h3>
//     <Card className="overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div className="relative h-64 md:h-auto">
//           <Image
//             src="/placeholder.svg?height=400&width=600&text=NextSammelan"
//             alt="Next Vivah Sammelan"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <CardContent className="p-6 flex flex-col justify-center">
//           <h4 className="font-bold text-xl mb-2">
//             Annual Vivah Sammelan 2025
//           </h4>
//           <p className="text-muted-foreground mb-4">
//             Date: May 15, 2025
//             <br />
//             Time: 10:00 AM - 6:00 PM
//             <br />
//             Venue: Rangraj Community Hall, Mumbai
//           </p>
//           <p className="text-muted-foreground mb-4">
//             Our annual marriage meet bringing together eligible
//             candidates from the Rangraj community. Registration is
//             now open for candidates and families.
//           </p>
//           <Button className="w-full md:w-auto bg-[#B7410E] hover:bg-[#8B3103] text-white">
//             Register Now
//           </Button>
//         </CardContent>
//       </div>
//     </Card>
//   </div>

//   <div className="bg-[#F9F5E7] p-6 rounded-lg">
//     <h3 className="text-xl font-bold mb-4">Success Stories</h3>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[1, 2, 3].map((i) => (
//         <Card key={i} className="border-2 border-[#F2C94C]/20">
//           <CardContent className="p-6 space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
//                 <Image
//                   src={`/placeholder.svg?height=100&width=100&text=C${i}`}
//                   alt="Couple"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-bold">Couple {i}</h4>
//                 <p className="text-sm text-muted-foreground">
//                   Married: 202{i}
//                 </p>
//               </div>
//             </div>
//             <p className="italic">
//               "We met at the Rangraj Samaj Vivah Sammelan and
//               instantly connected. The organized environment helped
//               us get to know each other's families properly. We're
//               grateful to the Samaj for this beautiful beginning to
//               our life together."
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>
// </TabsContent>

// <TabsContent value="education" className="space-y-8">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     <div>
//       <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
//         Education Initiative
//       </div>
//       <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
//         Educational Support
//       </h2>
//       <p className="text-lg mb-4">
//         Education is the foundation for a better future. Our
//         Educational Support initiative aims to ensure that every
//         child in our community has access to quality education,
//         regardless of their financial background.
//       </p>
//       <p className="text-lg mb-4">
//         Our educational programs include:
//       </p>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Scholarships for deserving students</li>
//         <li>Financial assistance for higher education</li>
//         <li>Career guidance and counseling</li>
//         <li>Skill development workshops</li>
//         <li>Educational materials and resources</li>
//       </ul>
//       <div className="flex flex-wrap gap-4">
//         <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
//           Apply for Scholarship
//         </Button>
//         <Button variant="outline">Donate for Education</Button>
//       </div>
//     </div>
//     <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
//       <Image
//         src="/placeholder.svg?height=800&width=600&text=Education"
//         alt="Educational Support"
//         fill
//         className="object-cover"
//       />
//     </div>
//   </div>

//   <div className="mt-12">
//     <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
//       Scholarship Recipients
//     </h3>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[1, 2, 3].map((i) => (
//         <Card key={i} className="overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src={`/placeholder.svg?height=300&width=400&text=Student${i}`}
//               alt={`Student ${i}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <CardContent className="p-6">
//             <h4 className="font-bold text-lg mb-2">Student {i}</h4>
//             <p className="text-sm text-muted-foreground mb-2">
//               Pursuing:{" "}
//               {
//                 ["Engineering", "Medicine", "Computer Science"][
//                   i - 1
//                 ]
//               }
//             </p>
//             <p className="text-muted-foreground">
//               "The scholarship from Rangraj Samaj has been
//               instrumental in helping me pursue my dream of becoming
//               a{" "}
//               {["engineer", "doctor", "software developer"][i - 1]}.
//               I'm grateful for this support."
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>

//   <div className="bg-[#F9F5E7] p-6 rounded-lg">
//     <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           500+
//         </div>
//         <p>Scholarships Awarded</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           ₹50L+
//         </div>
//         <p>Educational Aid Distributed</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">
//           100+
//         </div>
//         <p>Professional Graduates</p>
//       </div>
//       <div className="p-4 bg-white rounded-lg">
//         <div className="text-3xl font-bold text-[#B7410E]">20+</div>
//         <p>Career Workshops</p>
//       </div>
//     </div>
//   </div>
// </TabsContent>
//       </Tabs>
//     </div>
//   </section>
//   )
// }

// export default InitTabs

"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResponsiveTabHeader from "../ResponsiveTabHeader";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

const tabItems = [
  { label: "Medical Aid", value: "health" },
  { label: "Zakat distribution", value: "zakat" },
  { label: "Nikah Sammelan", value: "nikah" },
  { label: "Education", value: "education" },
];

export default function InitTabs() {
  const [activeTab, setActiveTab] = useState("health");

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
            <TabsList className="grid w-full grid-cols-4">
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
                  src="/placeholder.svg?height=800&width=600&text=Medical"
                  alt="Medical Aid Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
                  Health Initiative
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
                  Medical Aid Program
                </h2>
                <p className="text-lg mb-4">
                  Our Medical Aid Program aims to provide accessible healthcare
                  services to all members of our community, especially those who
                  cannot afford quality medical care.
                </p>
                <p className="text-lg mb-4">
                  Through this initiative, we offer:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Free medical check-up camps in various locations</li>
                  <li>Financial assistance for critical medical treatments</li>
                  <li>Subsidized medicines for chronic conditions</li>
                  <li>Health awareness programs and workshops</li>
                  <li>Tie-ups with hospitals for discounted treatments</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
                    Apply for Medical Aid
                  </Button>
                  <Button variant="outline">Volunteer for Health Camps</Button>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
                Recent Health Camps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Camp${i}`}
                        alt={`Health Camp ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">
                        Health Check-up Camp {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        March {i * 5}, 2025 | Mumbai
                      </p>
                      <p className="text-muted-foreground">
                        Provided free health check-ups to over 200 community
                        members, including general health, eye, and dental
                        examinations.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">50+</div>
                  <p>Health Camps Conducted</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">
                    5,000+
                  </div>
                  <p>People Benefited</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">₹50L+</div>
                  <p>Medical Aid Distributed</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">20+</div>
                  <p>Hospital Partnerships</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="zakat" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
                  Charity Initiative
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
                  Zakat Distribution
                </h2>
                <p className="text-lg mb-4">
                  Zakat is one of the five pillars of Islam, requiring Muslims
                  to give 2.5% of their qualifying wealth to those in need. Our
                  Zakat Distribution program ensures that these funds reach the
                  most deserving members of our community.
                </p>
                <p className="text-lg mb-4">Our Zakat Distribution covers:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Financial assistance to poor families</li>
                  <li>Educational scholarships for deserving students</li>
                  <li>Medical treatment for those who cannot afford it</li>
                  <li>Support for widows and orphans</li>
                  <li>Aid for those in debt due to genuine needs</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
                    Contribute Zakat
                  </Button>
                  <Button variant="outline">Apply for Zakat Assistance</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Zakat"
                  alt="Zakat Distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
                Recent Zakat Distributions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Zakat${i}`}
                        alt={`Zakat Distribution ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">
                        Zakat Distribution Drive {i}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        February {i * 5}, 2025 | Multiple Locations
                      </p>
                      <p className="text-muted-foreground">
                        Distributed Zakat funds to 100+ families, providing
                        financial assistance for basic needs, education, and
                        medical treatments.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">₹1Cr+</div>
                  <p>Zakat Collected</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">
                    1,000+
                  </div>
                  <p>Families Supported</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">200+</div>
                  <p>Students Sponsored</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">50+</div>
                  <p>Medical Treatments Funded</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nikah" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Nikah"
                  alt="Nikah Sammelan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
                  Community Initiative
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
                  Nikah Sammelan
                </h2>
                <p className="text-lg mb-4">
                  Our Nikah Sammelan (Marriage Meet) initiative aims to help
                  eligible candidates from the Rangraj community find suitable
                  life partners in a respectful and organized environment.
                </p>
                <p className="text-lg mb-4">Features of our Nikah Sammelan:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Carefully screened and verified profiles</li>
                  <li>Organized meetings in a dignified setting</li>
                  <li>Biodata sharing and introduction facilitation</li>
                  <li>Privacy and respect for all participants</li>
                  <li>
                    Financial assistance for marriages of underprivileged
                    families
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
                    Register for Next Sammelan
                  </Button>
                  <Button variant="outline">Submit Your Profile</Button>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
                Upcoming Nikah Sammelan
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
                      Annual Nikah Sammelan 2025
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Date: May 15, 2025
                      <br />
                      Time: 10:00 AM - 6:00 PM
                      <br />
                      Venue: Rangraj Community Hall, Mumbai
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Our annual marriage meet bringing together eligible
                      candidates from the Rangraj community. Registration is now
                      open for candidates and families.
                    </p>
                    <Button className="w-full md:w-auto bg-[#B7410E] hover:bg-[#8B3103] text-white">
                      Register Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-2 border-[#F2C94C]/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
                          <Image
                            src={`/placeholder.svg?height=100&width=100&text=C${i}`}
                            alt="Couple"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Couple {i}</h4>
                          <p className="text-sm text-muted-foreground">
                            Married: 202{i}
                          </p>
                        </div>
                      </div>
                      <p className="italic">
                        "We met at the Rangraj Samaj Nikah Sammelan and
                        instantly connected. The organized environment helped us
                        get to know each other's families properly. We're
                        grateful to the Samaj for this beautiful beginning to
                        our life together."
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#F2C94C]/10 px-3 py-1 text-sm text-[#B7410E] mb-4">
                  Education Initiative
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
                  Educational Support
                </h2>
                <p className="text-lg mb-4">
                  Education is the foundation for a better future. Our
                  Educational Support initiative aims to ensure that every child
                  in our community has access to quality education, regardless
                  of their financial background.
                </p>
                <p className="text-lg mb-4">
                  Our educational programs include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Scholarships for deserving students</li>
                  <li>Financial assistance for higher education</li>
                  <li>Career guidance and counseling</li>
                  <li>Skill development workshops</li>
                  <li>Educational materials and resources</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
                    Apply for Scholarship
                  </Button>
                  <Button variant="outline">Donate for Education</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-first lg:order-last">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Education"
                  alt="Educational Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[#8B3103]">
                Scholarship Recipients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Student${i}`}
                        alt={`Student ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">Student {i}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pursuing:{" "}
                        {["Engineering", "Medicine", "Computer Science"][i - 1]}
                      </p>
                      <p className="text-muted-foreground">
                        "The scholarship from Rangraj Samaj has been
                        instrumental in helping me pursue my dream of becoming a{" "}
                        {["engineer", "doctor", "software developer"][i - 1]}.
                        I'm grateful for this support."
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-[#F9F5E7] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">500+</div>
                  <p>Scholarships Awarded</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">₹50L+</div>
                  <p>Educational Aid Distributed</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">100+</div>
                  <p>Professional Graduates</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-[#B7410E]">20+</div>
                  <p>Career Workshops</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
