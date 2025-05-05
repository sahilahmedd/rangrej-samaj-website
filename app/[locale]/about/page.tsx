import AboutHero from "@/components/about/AboutHero";
import AboutEvents from "@/components/about/AboutEvents";
import AboutImpact from "@/components/about/AboutImpact";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <AboutHero />

      {/* About Content */}
      <AboutEvents />

      {/* Impact Section */}
      <AboutImpact />
    </main>
  );
}
