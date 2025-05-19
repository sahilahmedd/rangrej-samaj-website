import HeroHome from "@/components/home/HeroHome";
import Quicklinks from "@/components/home/Quicklinks";
import HomeAbout from "@/components/home/HomeAbout";
import HomeEvents from "@/components/home/HomeEvents";
import Testimonials from "@/components/home/Testimonials";
import NewsHome from "@/components/home/NewsHome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroHome />

      {/* Quick Links Section */}
      <Quicklinks />

      {/* About Section */}
      <HomeAbout />

      {/* Events Section */}
      <HomeEvents />  

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Newsletter */}
      <NewsHome />
    </main>
  );
}
