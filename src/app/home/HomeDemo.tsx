import { ExternalLink, Rocket } from "lucide-react";
import RevealOnScroll from "@/components/layout/RevealOnScroll";

export default function HomeDemo() {
  return (
    <section className="w-full bg-[#020817] py-12 md:py-16 px-6">
      <RevealOnScroll>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text & Features */}
            <div className="flex-1 w-full max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
                See It In Action:{" "}
                <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                  Live Demo
                </span>
              </h2>
              <p className="text-white text-lg mb-8">
                Experience exactly how our AI-powered realtor websites capture and qualify leads automatically. This is a real working example.
              </p>
              <ul className="mb-8 space-y-3">
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
              <a
                href="/demo"
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow transition"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Demo
              </a>
            </div>
            {/* Right: Demo Card */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative bg-[#181d29] rounded-2xl shadow-xl px-8 py-12 w-full max-w-md flex flex-col items-center text-center border border-[#232736]">
                {/* Live Demo badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-semibold shadow">
                    <span className="w-2 h-2 rounded-full bg-green-300 inline-block" />
                    Live Demo
                  </span>
                </div>
                <Rocket className="w-12 h-12 text-blue-500 mb-6" />
                <div className="text-xl font-semibold text-white mb-2">
                  Interactive Demo Site
                </div>
                <div className="text-gray-400 text-base">
                  Click to explore AI features
                </div>
              </div>
            </div>
            </div>
      </RevealOnScroll>
    </section>
    );
}