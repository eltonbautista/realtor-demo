import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DemoCta() {
  return (
    <div className="px-4 md:pt-16 relative">
      {/* Blurred background image */}
      <div className="absolute inset-0 w-full h-full -z-10 flex justify-center items-center">
        <Image
          src="/images/hero-img.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full blur-xl brightness-75"
          priority
        />
      </div>
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
                size="lg"
                className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors text-base tracking-wide uppercase bg-white w-full sm:w-auto"
              >
                Buy a House
              </Button>
            </a>
            <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20selling%20my%20house" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="px-8 py-3 border border-gray-900 bg-gray-900 text-white font-medium rounded-none hover:bg-white hover:text-gray-900 transition-colors text-base tracking-wide uppercase w-full sm:w-auto"
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