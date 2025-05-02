import InitHero from "@/components/initiatives/InitHero";
import InitTabs from "@/components/initiatives/InitTabs";
import InfoCard from "@/components/initiatives/InfoCard";

export default function InitiativesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <InitHero />

      {/* Initiatives Tabs */}
      <InitTabs />

      {/* Get Involved */}
      <InfoCard />
    </main>
  );
}
