import LeadForm from "@/components/ai/LeadForm";

export default function HomeContact() {
    return(
        <section className="px-6">
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-8 rounded-3xl shadow-xl max-w-7xl mx-auto my-16 border border-blue-200 flex flex-col md:flex-row items-center md:items-stretch gap-8">
              {/* Left: Contact Info & Form (40%) */}
              <div className="w-full md:w-3/6 flex flex-col justify-center text-center md:text-left md:justify-center">
                <h2 className="heading-font text-3xl md:text-5xl font-extrabold mb-4 text-blue-900">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about a property or want to schedule a showing?
                  <br />
                  <span className="font-semibold text-blue-700">
                    Contact Sarah directly for expert guidance and a personalized experience.
                  </span>
                </p>
                <div className="max-w-md mx-auto md:mx-0">
                  <LeadForm />
                </div>
              </div>
              {/* Right: Agent Image & Name (60%) */}
              <div className="w-full md:w-3/6 flex flex-col items-center justify-center md:justify-center md:items-end">
                <img
                  src="/images/sarahli.jpg"
                  alt="Sarah Li"
                  className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-2xl shadow-2xl object-cover bg-gray-100 mb-4 md:mb-2"
                  style={{ objectPosition: "center top" }}
                />
                <span className="heading-font text-xl md:text-2xl font-bold text-blue-900">
                  Sarah Li, REALTOR®
                </span>
              </div>
            </div>
        </section>
    )
}