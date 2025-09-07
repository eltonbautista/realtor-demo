"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, BedDouble, Bath, Ruler } from "lucide-react";
import LeadForm from "@/components/ai/LeadForm";
import { Listing } from "@/lib/listings";

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
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6" id="listings">
      <h2 className="heading-font md:text-5xl text-4xl font-bold mb-2 text-center text-blue-900">Featured Listings</h2>
      <p className="text-lg text-blue-600 text-center mb-10">
        Discover exceptional properties in Edmonton's most desirable neighborhoods
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleListings.map((l) => (
          <div
            key={l.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden bg-white flex flex-col"
          >
            {/* Image clickable */}
            {l.images?.length > 0 && (
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer group" onClick={() => openGallery(l.images, 0)}>
                    <img
                      src={l.images[0]}
                      alt={l.title}
                      className="w-full h-56 object-cover"
                    />
                    {/* Property type badge */}
                    <span className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full shadow capitalize">
                      {l.type || "House"}
                    </span>
                    {/* Heart icon */}
                    <span className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow hover:bg-white">
                      <Heart className="h-5 w-5 text-blue-300" />
                    </span>
                    {/* Price overlay */}
                    <span className="absolute bottom-4 left-4 bg-white text-blue-500 text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                      ${l.price.toLocaleString()}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black">
                  <DialogTitle className="text-white sr-only">Featured Listings Gallery</DialogTitle>
                  {activeImages.length > 0 && (
                    <div className="relative flex items-center justify-center w-full h-[60vh]">
                      <img
                        src={activeImages[currentIndex]}
                        alt="Gallery"
                        className="max-h-full max-w-full object-contain"
                      />
                      {renderGalleryArrows(activeImages.length)}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="heading-font text-lg font-bold text-blue-900 mb-1">{l.title}</h3>
              <p className="flex items-center text-gray-500 text-sm mb-1">
                <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {l.address}
              </p>
              <p className="text-gray-500 font-bold text-sm mb-2">{l.neighbourhood}</p>
              <p className="text-gray-500 text-sm mb-3 truncate">{l.description}</p>
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center text-blue-600 text-sm font-medium">
                  <BedDouble className="w-4 h-4 mr-1" /> {l.beds}
                </span>
                <span className="flex items-center text-blue-600 text-sm font-medium">
                  <Bath className="w-4 h-4 mr-1" /> {l.baths}
                </span>
                <span className="flex items-center text-blue-600 text-sm font-medium">
                  <Ruler className="w-4 h-4 mr-1" /> {l.sqft.toLocaleString()} sq ft
                </span>
              </div>
              {/* Features badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {l.features?.map((feature) => (
                  <span
                    key={feature}
                    className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold w-full mt-auto">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      {LISTINGS.length > 3 && (
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-blue-300 text-blue-500 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All Listings"}
          </Button>
        </div>
      )}
    </section>
  );
}