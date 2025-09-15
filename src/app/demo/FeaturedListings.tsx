"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Listing } from "@/lib/listings";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";


export default function FeaturedListings({ LISTINGS }: { LISTINGS: Listing[] }) {
  const [showAll, setShowAll] = useState(false);
  // Modal state: null means closed, otherwise holds the listing id
  const [openListingId, setOpenListingId] = useState<string | null>(null);
  // Only show 4 cards unless showAll is true
  const visibleListings = showAll ? LISTINGS : LISTINGS.slice(0, 4);

  // Carousel state for modal
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Find the open listing object
  const openListing = openListingId ? LISTINGS.find(l => l.id === openListingId) : null;

  // Reset carousel index when modal opens
  React.useEffect(() => {
    if (openListingId) setCarouselIdx(0);
  }, [openListingId]);

  return (
    <section
      className="max-w-[1600px] mx-auto py-16 px-2 sm:px-4 md:px-8"
      id="listings"
      aria-labelledby="featured-listings-heading"
    >
      <h2
        id="featured-listings-heading"
        className="font-serif font-light md:text-5xl text-4xl mb-2 text-left text-[#3a4251]"
      >
        Featured Listings
      </h2>
      <p className="text-lg text-[#8b98ad] text-left mb-10 max-w-2xl">
        Discover exceptional properties in Santa Barbara&apos;s most desirable neighborhoods.
      </p>
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          auto-rows-[minmax(220px,400px)]
        "
        role="list"
      >
        {visibleListings.map((l, idx) => (
          <article
            key={l.id}
            className={`
              group relative flex flex-col justify-end
              overflow-hidden
              shadow-lg border border-[#e6eaf1]
              focus-within:ring-4 focus-within:ring-blue-300
              transition
              min-h-[220px] sm:min-h-[320px] md:min-h-[400px]
            `}
            tabIndex={0}
            aria-label={`Listing: ${l.title}, ${l.address}, $${l.price.toLocaleString()}`}
          >
            {/* Listing Image */}
            <Image
              src={l.images?.[0] || "/placeholder.jpg"}
              alt={l.title}
              fill
              className="absolute inset-0 w-full h-full object-cover object-center transition group-hover:scale-105 duration-300"
              style={{ zIndex: 1, borderRadius: 0 }}
              priority={idx < 2}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay gradient for readability */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              aria-hidden="true"
              style={{ zIndex: 2 }}
            />
            {/* Status badge */}
            {l.type && (
              <span
                className="absolute top-4 right-4 bg-white/90 text-[#3a4251] text-xs font-semibold px-4 py-1 shadow border border-[#e6eaf1] uppercase"
                style={{ zIndex: 3, borderRadius: 0 }}
              >
                {l.type}
              </span>
            )}
            {/* Address and price */}
            <div
              className="relative z-10 p-6 flex flex-col gap-2"
              style={{ zIndex: 4 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-white drop-shadow font-light mb-1">
                {l.title}
              </h3>
              <p className="text-white text-base md:text-lg font-light drop-shadow mb-1">
                {l.address}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-white/90 text-sm md:text-base font-semibold drop-shadow">
                  {l.beds} Beds
                </span>
                <span className="text-white/90 text-sm md:text-base font-semibold drop-shadow">
                  {l.baths} Baths
                </span>
                <span className="text-white/90 text-sm md:text-base font-semibold drop-shadow">
                  {l.sqft.toLocaleString()} sq ft
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {l.features?.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    className="bg-white/80 text-[#3a4251] text-xs font-semibold px-3 py-1 border border-[#e6eaf1]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="bg-white/90 text-[#3a4251] text-lg md:text-xl font-bold px-5 py-2 shadow border border-[#e6eaf1]" style={{ borderRadius: 0 }}>
                  ${l.price.toLocaleString()}
                </span>
                <Button
                  className="bg-transparent hover:bg-white/80 text-white hover:text-[#3a4251]
                    font-semibold px-6 py-2 shadow-none transition focus-visible:ring-2 focus-visible:ring-blue-400 border"
                  aria-label={`View details for ${l.title}`}
                  tabIndex={0}
                  onClick={() => setOpenListingId(l.id)}
                  style={{ borderRadius: 0 }}
                >
                  Details
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {LISTINGS.length > 4 && (
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-[#e6eaf1] text-[#3a4251] font-semibold px-8 py-3 hover:bg-yellow-50 transition"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            aria-controls="listings"
          >
            {showAll ? "Show Less" : "View All Listings"}
          </Button>
        </div>
      )}
      {/* Modal for listing images */}
      <Dialog open={!!openListingId} onOpenChange={open => setOpenListingId(open ? openListingId : null)}>
        <DialogContent
          className="max-w-2xl lg:max-w-6xl w-full flex flex-col items-center bg-white/95 border-2 border-[#e6eaf1] p-0 overflow-hidden"
          style={{ padding: 0, borderRadius: 0 }}
        >
          {openListing && (
            <>
              <DialogHeader className="w-full bg-gradient-to-r from-[#f7f8fa] to-[#e6eaf1] px-8 py-6 border-b border-[#e6eaf1]" style={{ borderRadius: 0 }}>
                <DialogTitle className="font-serif text-3xl text-[#3a4251] font-light text-left uppercase" style={{ borderRadius: 0 }}>
                  {openListing.title}
                </DialogTitle>
              </DialogHeader>
              <div className="w-full flex flex-col items-center px-8 py-6">
                <div className="relative w-full flex flex-col items-center">
                  <div className="relative w-full h-[300px] md:h-[500px] bg-[#f7f8fa] border border-[#e6eaf1]" style={{ marginBottom: 16, borderRadius: 0 }}>
                    <Image
                      src={openListing.images[carouselIdx]}
                      alt={openListing.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  {openListing.images.length > 1 && (
                    <div className="flex justify-between items-center w-full mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCarouselIdx((i) => (i === 0 ? openListing.images.length - 1 : i - 1))}
                        className="px-5 py-2 font-semibold text-[#3a4251] border-[#e6eaf1] bg-white/90 hover:bg-[#f7f8fa] shadow"
                        style={{ borderRadius: 0 }}
                      >
                        Prev
                      </Button>
                      <span className="text-base text-[#8b98ad] font-medium">
                        {carouselIdx + 1} / {openListing.images.length}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCarouselIdx((i) => (i === openListing.images.length - 1 ? 0 : i + 1))}
                        className="px-5 py-2 font-semibold text-[#3a4251] border-[#e6eaf1] bg-white/90 hover:bg-[#f7f8fa] shadow"
                        style={{ borderRadius: 0 }}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </div>
                <div className="mt-6 text-center text-[#3a4251] text-lg font-light max-w-2xl mx-auto">
                  {openListing.description}
                </div>
              </div>
              <DialogClose asChild>
                <Button className="mb-8 mt-2 px-8 py-3 font-semibold text-[#3a4251] bg-[#f7f8fa] border border-[#e6eaf1] hover:bg-[#e6eaf1] shadow" variant="secondary" style={{ borderRadius: 0 }}>Close</Button>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}