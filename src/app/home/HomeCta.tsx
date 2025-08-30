import { Button } from "@/components/ui/button";

export default function HomeCta() {
    return (
      <div className="px-6">
        <section className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-white pt-16 pb-6 md:py-16 px-4 sm:px-8 md:px-10 rounded-3xl shadow-2xl max-w-4xl mx-auto mb-0 mt-40 md:mt-24 md:mb-6 border border-blue-200">
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
            <img
              src="/images/sarahli-2.jpg"
              alt="Sarah Li"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-2xl object-cover bg-gray-100 transition-transform duration-300 hover:scale-105"
            />
            <span className="heading-font text-2xl font-bold text-blue-700 mt-8 md:mt-6 drop-shadow-lg">Sarah Li, REALTOR®</span>
          </div>
          <div className="pt-0 md:pt-14">
            <h2 className="heading-font text-3xl sm:text-4xl font-extrabold mb-4 text-blue-900">
              Ready to find your perfect home?
            </h2>
            <p className="mb-8 text-gray-700 text-lg">
              Let <span className="font-semibold text-blue-700">Sarah Li</span> guide you every step of the way. Book your free, no-obligation consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20buying%20a%20house">
                <Button
                  className="px-8 py-4 text-lg font-semibold bg-blue-500 text-white shadow-lg hover:bg-blue-900 transition-all duration-200 rounded-xl w-full"
                  size="lg"
                >
                  Buy a House
                </Button>
              </a>
              <a href="mailto:sarah@example.com?subject=I'm%20interested%20in%20selling%20my%20house">
                <Button
                  className="px-6 py-3 text-base sm:text-lg border-2 hover:bg-blue-50 flex items-center gap-2 font-semibold rounded-xl"
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
    )
}