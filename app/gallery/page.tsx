import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // Sample gallery data
  const culturalImages = Array.from({ length: 9 }, (_, i) => ({
    id: `cultural-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800&text=Cultural${i + 1}`,
    alt: `Cultural Event ${i + 1}`,
    caption: `Traditional cultural celebration from our community gathering ${i + 1}`,
  }))

  const medicalImages = Array.from({ length: 6 }, (_, i) => ({
    id: `medical-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800&text=Medical${i + 1}`,
    alt: `Medical Camp ${i + 1}`,
    caption: `Health check-up camp providing free medical services to the community ${i + 1}`,
  }))

  const vivahImages = Array.from({ length: 6 }, (_, i) => ({
    id: `vivah-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800&text=Vivah${i + 1}`,
    alt: `Vivah Sammelan ${i + 1}`,
    caption: `Successful marriage meet bringing together eligible candidates from our community ${i + 1}`,
  }))

  const communityImages = Array.from({ length: 6 }, (_, i) => ({
    id: `community-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800&text=Community${i + 1}`,
    alt: `Community Gathering ${i + 1}`,
    caption: `Community members coming together for various social activities and celebrations ${i + 1}`,
  }))

  // Sample videos
  const videos = [
    {
      id: "video-1",
      title: "Annual Cultural Festival 2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video1",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video-2",
      title: "Rangraj Samaj Health Initiative",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video2",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video-3",
      title: "Vivah Sammelan Highlights",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video3",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Gallery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Gallery</h1>
          <p className="text-xl text-white/90 max-w-[800px]">
            Explore moments from our community events, initiatives, and gatherings.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="cultural" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cultural">Cultural Events</TabsTrigger>
              <TabsTrigger value="medical">Medical Camps</TabsTrigger>
              <TabsTrigger value="vivah">Vivah Sammelans</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="cultural" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {culturalImages.map((image) => (
                  <div key={image.id} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {medicalImages.map((image) => (
                  <div key={image.id} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vivah" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vivahImages.map((image) => (
                  <div key={image.id} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communityImages.map((image) => (
                  <div key={image.id} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
