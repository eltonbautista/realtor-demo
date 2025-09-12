"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Ruler } from "lucide-react";
import { Listing } from "@/lib/listings";
import VirtualTour from "@/components/layout/VirtualTour";

export default function FeaturedListings({ LISTINGS }: { LISTINGS: Listing[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const openGallery = (images: string[], startIndex: number) => {
    setActiveImages(images);
    setCurrentIndex(startIndex);
    setIsOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeImages.length]);

  function renderGalleryArrows(imagesLength: number) {
    const minImageLimit = 2;
    if (imagesLength < minImageLimit) return null;
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </Button>
      </>
    );
  }

  // Only show 3 cards unless showAll is true
  const visibleListings = showAll ? LISTINGS : LISTINGS.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto py-24 px-4 sm:px-8" id="listings">
      <h2 className="font-serif font-light md:text-5xl text-4xl mb-2 text-left text-[#3a4251]">
        Featured Listings
      </h2>
      <p className="text-lg text-[#8b98ad] text-left mb-12 max-w-2xl">
        Discover exceptional properties in Santa Barbara&apos;s most desirable neighborhoods.
      </p>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibleListings.map((l) => (
          <div
            key={l.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden bg-white flex flex-col border border-[#e6eaf1]"
            style={{ minHeight: 480 }}
          >
            {/* Image clickable */}
            {l.images?.length > 0 && (
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => openGallery(l.images, 0)}
                  >
                    <img
                      src={l.images[0]}
                      alt={l.title}
                      className="w-full h-60 object-cover transition group-hover:scale-105 duration-300"
                      style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                    />
                    {/* Property type badge */}
                    <span className="absolute top-4 left-4 bg-white/80 text-[#3a4251] text-xs font-semibold px-4 py-1 rounded-full shadow capitalize border border-[#e6eaf1]">
                      {l.type || "House"}
                    </span>
                    {/* Price overlay */}
                    <span className="absolute bottom-4 left-4 bg-white/90 text-[#3a4251] text-xl font-bold px-6 py-2 rounded-xl shadow border border-[#e6eaf1]">
                      ${l.price.toLocaleString()}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black">
                  <DialogTitle className="text-white sr-only">Featured Listings Gallery</DialogTitle>
                  {activeImages.length > 0 && (
                    <div className="relative flex items-center justify-center w-full h-[60vh]">
                      <VirtualTour image={activeImages[currentIndex]} />
                      {renderGalleryArrows(activeImages.length)}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-7">
              <h3 className="font-serif font-light text-2xl text-[#3a4251] mb-2">{l.title}</h3>
              <p className="flex items-center text-[#8b98ad] text-sm mb-1">
                <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {l.address}
              </p>
              <p className="text-[#b0b8c9] font-semibold text-xs mb-2">{l.neighbourhood}</p>
              <p className="text-[#8b98ad] text-sm mb-3 truncate">{l.description}</p>
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center text-[#3a4251] text-sm font-medium">
                  <BedDouble className="w-4 h-4 mr-1" /> {l.beds}
                </span>
                <span className="flex items-center text-[#3a4251] text-sm font-medium">
                  <Bath className="w-4 h-4 mr-1" /> {l.baths}
                </span>
                <span className="flex items-center text-[#3a4251] text-sm font-medium">
                  <Ruler className="w-4 h-4 mr-1" /> {l.sqft.toLocaleString()} sq ft
                </span>
              </div>
              {/* Features badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {l.features?.map((feature) => (
                  <span
                    key={feature}
                    className="bg-[#f5f7fa] text-[#3a4251] text-xs font-semibold px-3 py-1 rounded-full border border-[#e6eaf1]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Button className="bg-yellow-100 hover:bg-yellow-200 text-[#3a4251] font-semibold w-fit px-6 py-2 rounded-md mt-auto shadow-none border-none transition">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      {LISTINGS.length > 3 && (
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[#e6eaf1] text-[#3a4251] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-50 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All Listings"}
          </Button>
        </div>
      )}
    </section>
  );
}