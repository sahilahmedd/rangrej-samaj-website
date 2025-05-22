"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "../tabs-trigger";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("cultural");
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSets: Record<string, { id: string; src: string; alt: string; caption: string }[]> = {
    cultural: Array.from({ length: 9 }, (_, i) => ({
      id: `cultural-${i + 1}`,
      src: `/images/logo.png`,
      alt: `Cultural Event ${i + 1}`,
      caption: `Traditional cultural celebration from our community gathering ${i + 1}`,
    })),
    medical: Array.from({ length: 6 }, (_, i) => ({
      id: `medical-${i + 1}`,
      src: `/images/logo.png`,
      alt: `Medical Camp ${i + 1}`,
      caption: `Health check-up camp providing free medical services to the community ${i + 1}`,
    })),
    vivah: Array.from({ length: 6 }, (_, i) => ({
      id: `Nikah-${i + 1}`,
      src: `/images/logo.png`,
      alt: `Nikah Sammelan ${i + 1}`,
      caption: `Successful marriage meet bringing together eligible candidates from our community ${i + 1}`,
    })),
    community: Array.from({ length: 6 }, (_, i) => ({
      id: `community-${i + 1}`,
      src: `/images/logo.png`,
      alt: `Community Gathering ${i + 1}`,
      caption: `Community members coming together for various social activities and celebrations ${i + 1}`,
    })),
  };

  const openModal = (tab: string, index: number) => {
    setCurrentTab(tab);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === imageSets[currentTab].length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageSets[currentTab].length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    else if (e.key === "ArrowLeft") prevImage();
    else if (e.key === "Escape") closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const renderImageGrid = (images: typeof imageSets[keyof typeof imageSets], tab: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg cursor-pointer border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full"
          onClick={() => openModal(tab, index)}
        >
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src={image.src}
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
  );

  const currentImage = imageSets[currentTab][currentIndex];

  return (
    <section className="py-16 ">
      <div className="container  px-4 md:px-6">
        <Tabs defaultValue="cultural" className="w-full text-xs sm:text-sm" onValueChange={setCurrentTab}>
          <TabsList className="grid gap-2 bg-rangrez-tab w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="cultural">Cultural Events</TabsTrigger>
            <TabsTrigger value="medical">Medical Camps</TabsTrigger>
            <TabsTrigger value="vivah">Nikah Sammelans</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="cultural">{renderImageGrid(imageSets.cultural, "cultural")}</TabsContent>
          <TabsContent value="medical">{renderImageGrid(imageSets.medical, "medical")}</TabsContent>
          <TabsContent value="vivah">{renderImageGrid(imageSets.vivah, "vivah")}</TabsContent>
          <TabsContent value="community">{renderImageGrid(imageSets.community, "community")}</TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Modal with Navigation */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <Dialog.Panel className="relative max-w-4xl mx-auto p-4 text-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {currentImage && (
            <>
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1000}
                height={800}
                className="w-full h-auto rounded shadow-lg"
              />
              <p className="text-white mt-4 text-sm">{currentImage.caption}</p>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default GallerySection;
