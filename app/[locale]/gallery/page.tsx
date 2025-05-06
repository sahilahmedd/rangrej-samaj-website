import GalleryHero from "@/components/gallery/GalleryHero"
import GallerySection from "@/components/gallery/GallerySection"
import GalleryVideo from "@/components/gallery/GalleryVideo"

export default function GalleryPage() {

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <GallerySection />

      {/* Video Gallery */}
      {/* <GalleryVideo /> */}
    </main>
  )
}
