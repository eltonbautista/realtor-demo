import LeadForm from "@/components/ai/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function HomeContact() {
  return (
    <section id="contact" className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="relative py-12 px-4 sm:px-8 max-w-7xl mx-auto my-16 flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left: Lead Form and Intro */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-2">
              <span>
                <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              AI-Powered Lead Generation
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
              Let&apos;s Find Your Perfect Home
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-8">
              Tell me about your ideal property.
            </p>
          </div>
          <LeadForm />
        </div>

        {/* Right: Contact Info and Why Choose */}
        <div className="w-full md:w-2/5 flex flex-col gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <ul className="space-y-5 text-blue-900 text-base">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="font-semibold">Call or Text</span>
                  <div className="text-gray-500 text-base"> (780) 123 4567 </div>
                  <div className="text-xs text-gray-500">Available 7 days a week</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="font-semibold">Email</span>
                  <div className="text-gray-500 text-base">sarah@sarahli.realtor</div>
                  <div className="text-xs text-gray-500">I respond within 2 hours</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="font-semibold">Service Area</span>
                  <div className="text-gray-500 text-base">
                    Edmonton &amp; Surrounding Areas
                  </div>
                  <div className="text-xs text-gray-500">
                    Including Sherwood Park, St. Albert
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="font-semibold">Office Hours</span>
                  <div className="text-gray-500 text-base">Mon-Fri: 8AM–8PM</div>
                  <div className="text-xs text-gray-500">Weekends: 9AM–6PM</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Why Choose */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-3">Why Choose Sarah Li?</h3>
            <ul className="space-y-3 text-blue-900 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <div>
                  <span className="font-semibold">Automated Services</span>
                  <div className="text-gray-500 text-sm">Advanced technology to match you with perfect properties</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <div>
                  <span className="font-semibold">Local Market Expert</span>
                  <div className="text-gray-500 text-sm">8+ years of Edmonton real estate experience</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <div>
                  <span className="font-semibold">Full-Service Support</span>
                  <div className="text-gray-500 text-sm">From search to closing, I&apos;m with you every step</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <div>
                  <span className="font-semibold">Proven Results</span>
                  <div className="text-gray-500 text-sm">200+ successful transactions and 5-star reviews</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}