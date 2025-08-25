"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeadForm from "@/components/ai/LeadForm";
import { Listing } from "@/lib/listings";

export default function FeaturedListings({ LISTINGS }: { LISTINGS: Listing[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="heading-font text-3xl font-bold mb-10 text-center">Featured Listings</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LISTINGS.map((l) => (
          <div
            key={l.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Image clickable */}
            {l.images?.length > 0 && (
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <img
                    src={l.images[0]}
                    alt={l.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => openGallery(l.images, 0)}
                  />
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black">
                  <DialogTitle className="text-white sr-only">Featured Listings Gallery</DialogTitle>
                  {activeImages.length > 0 && (
                    <div className="relative flex items-center justify-center w-full h-[80vh]">
                      <img
                        src={activeImages[currentIndex]}
                        alt="Gallery"
                        className="max-h-full max-w-full object-contain"
                      />
                      {/* Prev Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full"
                      >
                        <ChevronLeft className="h-6 w-6 text-black" />
                      </Button>
                      {/* Next Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full"
                      >
                        <ChevronRight className="h-6 w-6 text-black" />
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}

            {/* Card Content */}
            <div className="p-6">
              <h3 className="heading-font text-xl font-semibold">{l.title}</h3>
              <p className="text-gray-600 mt-3">
                ${l.price.toLocaleString()} • {l.beds} bd • {l.baths} ba •{" "}
                {l.sqft} sqft
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {l.address} — {l.neighbourhood}
              </p>

              {l.openHouse && (
                <p className="text-blue-600 text-sm mt-2 font-medium">
                  Open House: {l.openHouse}
                </p>
              )}

              <div className="mt-4">
                <LeadForm listingId={l.id} />
              </div>

              <p className="text-xs text-gray-400 mt-3">
                Ask the chat (bottom right) about this listing.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
