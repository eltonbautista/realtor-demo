import { ExternalLink, Rocket } from "lucide-react";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import FormButton from "@/components/layout/FormButton";

export default function HomeDemo() {
  return (
  <section className="w-full bg-[#020817] py-18 md:py-24 px-10" id="demo">
      <RevealOnScroll>
          <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Text & Features */}
            <div className="flex-1 w-full max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-white heading-font">
                See It In Action:{" "} <br/>
                <span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">
                  Live Demo
                </span>
              </h2>
              <p className="text-white text-lg mb-8">
                Experience exactly how our AI-powered realtor websites capture and qualify leads automatically. This is a real working example.
              </p>
              <ul className="mb-12 space-y-5 text-xl">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  <span className="text-gray-400 text-base">
                    AI chatbot qualifies visitors in real-time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  <span className="text-gray-400 text-base">
                    Automated lead scoring and categorization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  <span className="text-gray-400 text-base">
                    Instant follow-up sequences trigger
                  </span>
                </li>
              </ul>
              <FormButton buttonText="Book a Demo" />
            </div>
            {/* Right: Demo Card */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative bg-[#181d29] rounded-2xl shadow-xl px-8 py-12 w-full max-w-2xl grid justify-items-center items-center text-center border border-[#232736]" style={{ minHeight: '600px' }}>
                {/* Live Demo badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-800 text-white text-sm font-semibold shadow">
                    <span className="w-2 h-2 rounded-full bg-green-300 inline-block" />
                    Live Demo
                  </span>
                </div>
                <video
                  src="/videos/demo-vid.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="rounded-2xl bg-black border border-blue-800 shadow"
                  style={{ width: '95%', height: '95%', objectFit: 'contain', maxHeight: '540px' }}
                  poster="/images/demo-vid-poster.jpg"
                />
              </div>
            </div>
            </div>
      </RevealOnScroll>
    </section>
    );
}