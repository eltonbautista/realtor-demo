"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/lib/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto text-center mb-14">
        <h2 className="heading-font text-5xl font-extrabold tracking-tight text-[#111827]">
          What My Clients Say
        </h2>
        <p className="text-gray-600 mb-8 mt-3 max-w-2xl mx-auto">
          Real experiences from people I’ve had the privilege to help.
        </p>
        <div className="w-20 h-1 bg-blue-500 mt-6 mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] px-4">
                <Card className="bg-white border border-gray-100 p-10 flex flex-col items-center gap-6 transition-all">
                  {/* <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-[#1E40AF] object-cover"
                  /> */}
                  <CardContent className="flex flex-col gap-4 text-center">
                    <p className="text-xl italic text-gray-700 leading-relaxed">
                      “{t.text}”
                    </p>
                    <div>
                      <p className="font-semibold text-blue-500 text-lg">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="pointer-events-auto rounded-full shadow-md bg-white hover:bg-blue-500 hover:text-[#ffffff] border-0 transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="pointer-events-auto rounded-full shadow-md bg-white hover:bg-blue-500 hover:text-[#ffffff] border-0 transition"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
