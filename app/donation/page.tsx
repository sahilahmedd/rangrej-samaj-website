import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, BookOpen, GraduationCap, Home } from "lucide-react"
import DonationForm from "@/components/donation-form"

export default function DonationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Donation and Zakat"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Donation & Zakat</h1>
          <p className="text-xl text-white/90 max-w-[800px]">
            Your generosity can change lives. Support our community initiatives through donations and Zakat.
          </p>
        </div>
      </section>

      {/* About Donations Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">About Donations & Zakat</h2>
              <p className="text-lg mb-4">
                Donations and Zakat are vital resources that enable us to serve our community effectively. Through your
                generosity, we can provide essential services and support to those in need.
              </p>
              <p className="text-lg mb-4">
                <strong>Zakat</strong> is one of the five pillars of Islam, requiring Muslims to give 2.5% of their
                qualifying wealth to those in need. It purifies wealth and helps create a more equitable society.
              </p>
              <p className="text-lg mb-4">
                <strong>Sadaqah</strong> refers to voluntary charity given out of compassion, love, or generosity.
                Unlike Zakat, there are no specific rules about how much or when to give Sadaqah.
              </p>
              <p className="text-lg">
                <strong>General donations</strong> from anyone, regardless of faith or background, are always welcome
                and help us extend our services to more people in need.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Donation and Charity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Donations Go */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Where Your Donations Go</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#F2C94C]/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
                <p className="text-muted-foreground">
                  Providing medical assistance, organizing health camps, and supporting those with chronic illnesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-muted-foreground">
                  Scholarships for deserving students, educational materials, and skill development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Marriage Aid</h3>
                <p className="text-muted-foreground">
                  Financial assistance for marriages of underprivileged community members.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2C94C]/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F2C94C]/10 flex items-center justify-center">
                  <Home className="w-8 h-8 text-[#B7410E]" />
                </div>
                <h3 className="text-xl font-bold">Family Support</h3>
                <p className="text-muted-foreground">
                  Helping families in financial distress with basic necessities and emergency assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
      <section className="py-16 bg-[#F9F5E7]">
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
      </section>

      {/* Transparency */}
      <section className="py-16 bg-white">
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
      </section>
    </main>
  )
}
