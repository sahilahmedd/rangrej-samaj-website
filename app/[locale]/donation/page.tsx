import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, BookOpen, GraduationCap, Home } from "lucide-react"
import DonationForm from "@/components/donation-form"
import DonationHero from "@/components/donation/DonationHero"
import DonationAbout from "@/components/donation/DonationAbout"
import DonationInfo from "@/components/donation/DonationInfo"
import DonationTestimonials from "@/components/donation/DonationTestimonials"
import DonationTransparency from "@/components/donation/DonationTransparency"

export default function DonationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <DonationHero />

      {/* About Donations Section */}
      <DonationAbout />

      {/* Where Donations Go */}
      <DonationInfo />

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Make a Donation</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="online">Online Donation</TabsTrigger>
                <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              </TabsList>

              <TabsContent value="online">
                <DonationForm />
              </TabsContent>

              <TabsContent value="bank">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Bank Transfer Details</h3>
                    <p className="text-muted-foreground mb-4">
                      You can make a direct bank transfer to our account using the following details:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Account Name:</p>
                        <p className="text-muted-foreground">Rangraj Samaj Trust</p>
                      </div>
                      <div>
                        <p className="font-medium">Account Number:</p>
                        <p className="text-muted-foreground">1234567890</p>
                      </div>
                      <div>
                        <p className="font-medium">Bank Name:</p>
                        <p className="text-muted-foreground">State Bank of India</p>
                      </div>
                      <div>
                        <p className="font-medium">IFSC Code:</p>
                        <p className="text-muted-foreground">SBIN0001234</p>
                      </div>
                      <div>
                        <p className="font-medium">Branch:</p>
                        <p className="text-muted-foreground">Mumbai Main Branch</p>
                      </div>
                      <div>
                        <p className="font-medium">Account Type:</p>
                        <p className="text-muted-foreground">Current Account</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="font-medium mb-2">Important Note:</p>
                      <p className="text-muted-foreground">
                        After making the transfer, please send the transaction details to info@rangrajsamaj.org or
                        WhatsApp to +91 12345 67890 for receipt and acknowledgment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-2 border-[#F2C94C]/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=P${i}`}
                        alt="Beneficiary"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Beneficiary {i}</h4>
                      <p className="text-sm text-muted-foreground">Healthcare Recipient</p>
                    </div>
                  </div>
                  <p className="italic">
                    "The medical assistance provided by Rangraj Samaj was life-saving for my family. My child needed
                    urgent surgery, and we couldn't afford it. Thanks to the generous donors, my child received the
                    treatment and is now healthy and thriving."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <DonationTestimonials />

      {/* Transparency */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Transparency & Accountability</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              We are committed to complete transparency in how we use donations. All funds are meticulously tracked and
              used solely for the intended purposes.
            </p>
            <p className="text-lg mb-6">
              Our financial records are audited annually by independent auditors, and reports are made available to all
              donors upon request.
            </p>
            <p className="text-lg mb-8">
              We provide regular updates on our projects and initiatives through our newsletter and social media
              channels.
            </p>
            <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">Request Annual Report</Button>
          </div>
        </div>
      </section> */}
      <DonationTransparency />
    </main>
  )
}
