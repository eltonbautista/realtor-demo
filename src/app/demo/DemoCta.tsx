import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeCta() {
  return (
    <div className="px-4 md:pt-16">
      <section className="relative bg-gray-100 pt-20 pb-10 md:py-20 px-4 sm:px-8 md:px-12 max-w-3xl mx-auto mb-0 mt-36 md:mt-20 md:mb-8 border border-[#e6eaf1]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
          <Image
            src="/images/sarahli-2.jpg"
            alt="Sarah Li"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 shadow-lg object-cover bg-gray-100 border-4 border-white"
            priority
          />
          <span className="font-serif text-2xl font-light text-[#3a4251] mt-6">Sarah Li, REALTOR®</span>
        </div>
        <div className="pt-0 md:pt-14 flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal mb-4 text-[#232736] text-center tracking-tight">
            Ready to find your perfect home?
          </h2>
          <p className="mb-8 text-[#8b98ad] text-lg text-center max-w-2xl">
            Let <span className="font-semibold text-[#3a4251]">Sarah Li</span> guide you every step of the way. Book your free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20buying%20a%20house" className="w-full sm:w-auto">
              <Button
                className="px-8 py-4 text-base font-semibold bg-yellow-100 hover:bg-yellow-200 text-[#232736] shadow-none border-none w-full sm:w-auto"
                size="lg"
                style={{ borderRadius: 0 }}
              >
                Buy a House
              </Button>
            </a>
            <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20selling%20my%20house" className="w-full sm:w-auto">
              <Button
                className="px-8 py-4 text-base font-semibold bg-white hover:bg-yellow-50 text-[#232736] border border-[#e6eaf1] shadow-none w-full sm:w-auto"
                size="lg"
                style={{ borderRadius: 0 }}
                variant="outline"
              >
                Sell a House
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}