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
      <DonationForm />

      {/* Testimonials */}
      <DonationTestimonials />

      {/* Transparency */}
      <DonationTransparency />
    </main>
  )
}
