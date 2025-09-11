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
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto text-center mb-14 px-6 md:px-0">
        <h2 className="font-serif font-light md:text-5xl text-4xl text-[#3a4251] mb-3">
          What My Clients Say
        </h2>
        <p className="text-[#8b98ad] mb-8 mt-3 max-w-2xl mx-auto">
          Real experiences from people I’ve had the privilege to help.
        </p>
        {/* Decorative underline */}
        <div className="w-16 h-1 bg-yellow-100 rounded-full mt-6 mb-0 mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] px-2 md:px-4 flex justify-center">
                <Card className="bg-white border border-[#e6eaf1] rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6 transition-all max-w-2xl w-full mx-auto">
                  {/* Uncomment if you want to show images
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-yellow-100 object-cover"
                  /> */}
                  <CardContent className="flex flex-col gap-4 text-center">
                    <p className="text-xl italic text-[#3a4251] leading-relaxed font-serif font-light">
                      “{t.text}”
                    </p>
                    <div>
                      <p className="font-semibold text-[#3a4251] text-lg">{t.name}</p>
                      <p className="text-sm text-[#8b98ad]">{t.role}</p>
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
            className="pointer-events-auto rounded-full shadow bg-white hover:bg-yellow-100 hover:text-[#3a4251] border border-[#e6eaf1] transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="pointer-events-auto rounded-full shadow bg-white hover:bg-yellow-100 hover:text-[#3a4251] border border-[#e6eaf1] transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}