import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useTranslations } from "next-intl";
const GallerySection = () => {
  const t = useTranslations("Gallery");
  const culturalImages = Array.from({ length: 9 }, (_, i) => ({
    id: `cultural-${i + 1}`,
    // src: `/placeholder.svg?height=600&width=800&text=Cultural${i + 1}`,
    src: `/images/logo.png`,
    alt: `Cultural Event ${i + 1}`,
    caption: `
    ${t("gallery-image-caption-cultural")}
     ${
      i + 1
    }`,
  }));

  const medicalImages = Array.from({ length: 6 }, (_, i) => ({
    id: `medical-${i + 1}`,
    // src: `/placeholder.svg?height=600&width=800&text=Medical${i + 1}`,
    src: `/images/logo.png`,
    alt: `Medical Camp ${i + 1}`,
    caption: `
    ${t("gallery-image-caption-medical")}
     ${
      i + 1
    }`,
  }));

  const vivahImages = Array.from({ length: 6 }, (_, i) => ({
    id: `Nikah-${i + 1}`,
    // src: `/placeholder.svg?height=600&width=800&text=Vivah${i + 1}`,
    src: `/images/logo.png`,
    alt: `Nikah Sammelan ${i + 1}`,
    caption: `
    ${t("gallery-image-caption-Nikah")}
     ${
      i + 1
    }`,
  }));

  const communityImages = Array.from({ length: 6 }, (_, i) => ({
    id: `community-${i + 1}`,
    // src: `/placeholder.svg?height=600&width=800&text=Community${i + 1}`,
    src: `/images/logo.png`,
    alt: `Community Gathering ${i + 1}`,
    caption: `
    ${t("gallery-image-caption-community")}
     ${
      i + 1
    }`,
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="cultural" className="w-full text-xs sm:text-sm">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="cultural">
              {/* Cultural Events */}
              {t("gallery-tabitems-cultural")}
            </TabsTrigger>
            <TabsTrigger value="medical">
              {/* Medical Camps */}
              {t("gallery-tabitems-medical")}
            </TabsTrigger>
            <TabsTrigger value="vivah">
              {/* Nikah Sammelans */}
              {t("gallery-tabitems-Nikah")}
            </TabsTrigger>
            <TabsTrigger value="community">
              {/* Community */}
              {t("gallery-tabitems-community")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cultural" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {culturalImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg"
                >
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
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg"
                >
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
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg"
                >
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
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg"
                >
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
  );
};

export default GallerySection;
