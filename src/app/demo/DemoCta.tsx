import { Button } from "@/components/ui/button";

export default function HomeCta() {
  return (
    <div className="px-6 md:pt-16">
      <section className="relative bg-white pt-16 pb-6 md:py-16 px-4 sm:px-8 md:px-10 rounded-3xl shadow-xl max-w-4xl mx-auto mb-0 mt-40 md:mt-16 md:mb-6 border border-[#e6eaf1]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
          <img
            src="/images/sarahli-2.jpg"
            alt="Sarah Li"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover bg-gray-100 border-4 border-white"
          />
          <span className="font-serif text-2xl font-light text-[#3a4251] mt-6">Sarah Li, REALTOR®</span>
        </div>
        <div className="pt-0 md:pt-14 flex flex-col items-start">
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4 text-[#3a4251] text-left">
            Ready to find your perfect home?
          </h2>
          <p className="mb-8 text-[#8b98ad] text-lg text-left max-w-2xl">
            Let <span className="font-semibold text-[#3a4251]">Sarah Li</span> guide you every step of the way. Book your free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20buying%20a%20house" className="w-full sm:w-auto">
              <Button
                className="px-8 py-4 text-base font-semibold bg-yellow-100 hover:bg-yellow-200 text-[#3a4251] rounded-md shadow-none border-none w-full sm:w-auto"
                size="lg"
              >
                Buy a House
              </Button>
            </a>
            <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20selling%20my%20house" className="w-full sm:w-auto">
              <Button
                className="px-8 py-4 text-base font-semibold bg-white hover:bg-yellow-50 text-[#3a4251] border border-[#e6eaf1] rounded-md shadow-none w-full sm:w-auto"
                size="lg"
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