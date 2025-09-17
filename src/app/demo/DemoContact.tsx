"use client";
import { useState } from "react";

import LeadForm from "@/components/ai/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoContact() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: open ? undefined : 'url(/images/ed-white.jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }}
    >
      {/* Overlay for darkening and blurring the image */}
      {!open && (
        <div className="absolute inset-0 bg-black/60 z-0" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      )}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full transition-all duration-700 ${open ? 'bg-white min-h-[60vh] py-12' : 'min-h-[60vh]'}`} style={{ maxWidth: open ? 1280 : '100%' }}>
        {!open ? (
          <div className="flex flex-col items-center justify-center w-full px-4">
            <h2 className="text-white text-4xl md:text-5xl leading-tight mb-6 text-center font-serif" style={{ letterSpacing: 2 }}>Work With Me</h2>
            <p className="text-white text-lg md:text-xl font-light mb-8 max-w-2xl text-center">
              Trusted by Edmonton&apos;s most discerning clients, Sarah Li maintains one of the city&apos;s most impressive luxury condominium portfolios.
              <br/>
              <br/>
              Discover why she&apos;s Edmonton&apos;s preferred real estate expert — schedule your complimentary consultation for buying, selling, or investing today.
            </p>
              <Button
                size="lg"
                className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors text-base tracking-wide uppercase bg-white"
                onClick={() => setOpen(true)}
              >
                Contact Us
              </Button>
          </div>
        ) : (
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 border border-[#e6eaf1] bg-white" style={{ borderRadius: 0 }}>
            {/* Left: Lead Form and Intro */}
            <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#8b98ad] font-semibold text-sm mb-2">
                  <span>
                    <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  AI-Powered Lead Generation
                </div>
                <h1 className="font-serif text-4xl font-light text-[#3a4251] mb-2">
                  Let&apos;s Find Your Perfect Home
                </h1>
                <p className="text-[#8b98ad] text-base md:text-lg mb-8">
                  Tell me about your ideal property.
                </p>
              </div>
              <LeadForm />
            </div>
            {/* Right: Contact Info and Why Choose */}
            <div className="w-full md:w-2/5 flex flex-col gap-10 px-8 py-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-serif font-light text-[#3a4251] mb-4">Get in Touch</h2>
                <ul className="space-y-5 text-[#3a4251] text-base">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#8b98ad] mt-0.5" />
                    <div>
                      <span className="font-semibold">Call or Text</span>
                      <div className="text-[#8b98ad] text-base"> (780) 123 4567 </div>
                      <div className="text-xs text-[#b0b8c9]">Available 7 days a week</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#8b98ad] mt-0.5" />
                    <div>
                      <span className="font-semibold">Email</span>
                      <div className="text-[#8b98ad] text-base">sarah@sarahli.realtor</div>
                      <div className="text-xs text-[#b0b8c9]">I respond within 2 hours</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8b98ad] mt-0.5" />
                    <div>
                      <span className="font-semibold">Service Area</span>
                      <div className="text-[#8b98ad] text-base">
                        Edmonton &amp; Surrounding Areas
                      </div>
                      <div className="text-xs text-[#b0b8c9]">
                        Including Sherwood Park, St. Albert
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8b98ad] mt-0.5" />
                    <div>
                      <span className="font-semibold">Office Hours</span>
                      <div className="text-[#8b98ad] text-base">Mon-Fri: 8AM–8PM</div>
                      <div className="text-xs text-[#b0b8c9]">Weekends: 9AM–6PM</div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Why Choose */}
              <div>
                <h3 className="text-lg font-serif font-light text-[#3a4251] mb-3">Why Choose Sarah Li?</h3>
                <ul className="space-y-3 text-[#3a4251] text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 bg-yellow-100 inline-block" style={{ borderRadius: 0 }} />
                    <div>
                      <span className="font-semibold">Automated Services</span>
                      <div className="text-[#8b98ad] text-sm">Advanced technology to match you with perfect properties</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 bg-yellow-100 inline-block" style={{ borderRadius: 0 }} />
                    <div>
                      <span className="font-semibold">Local Market Expert</span>
                      <div className="text-[#8b98ad] text-sm">8+ years of Edmonton real estate experience</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 bg-yellow-100 inline-block" style={{ borderRadius: 0 }} />
                    <div>
                      <span className="font-semibold">Full-Service Support</span>
                      <div className="text-[#8b98ad] text-sm">From search to closing, I&apos;m with you every step</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 bg-yellow-100 inline-block" style={{ borderRadius: 0 }} />
                    <div>
                      <span className="font-semibold">Proven Results</span>
                      <div className="text-[#8b98ad] text-sm">200+ successful transactions and 5-star reviews</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}