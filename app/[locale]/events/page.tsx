import EventsHero from "@/components/events/EventsHero";
import EventsSection from "@/components/events/EventsSection";
import EventsCategories from "@/components/events/EventsCategories";
import EventsHost from "@/components/events/EventsHost";

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <EventsHero />

      {/* Events Section */}
      <EventsSection />

      {/* Event Categories */}
      <EventsCategories />

      {/* Host an Event */}
      <EventsHost />

    </main>
  );
}
