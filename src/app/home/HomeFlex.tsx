"use client";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiZapier, SiOpenai, SiStripe, SiGoogleanalytics } from "react-icons/si";

const logos = [
  { icon: <FaReact size={60} title="React.js" color="#fff" />, name: "React.js" },
  { icon: <SiNextdotjs size={60} title="Next.js" color="#fff" />, name: "Next.js" },
  { icon: <SiExpress size={60} title="Express.js" color="#fff" />, name: "Express.js" },
  { icon: <FaNodeJs size={60} title="Node.js" color="#fff" />, name: "Node.js" },
  { icon: <SiZapier size={60} title="Zapier" color="#fff" />, name: "Zapier" },
  { icon: <SiOpenai size={60} title="OpenAI" color="#fff" />, name: "OpenAI" },
  // GoHighLevel SVG (replace with your own SVG if you have it)
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#FFD600"/>
        <path d="M24 12L30 36H18L24 12Z" fill="#333"/>
      </svg>
    ),
    name: "GoHighLevel"
  },
  { icon: <SiStripe size={60} title="Stripe" color="#fff" />, name: "Stripe" },
  { icon: <SiGoogleanalytics size={60} title="Google Analytics" color="#fff" />, name: "Google Analytics" },
];

export default function ScrollingTechStack() {
  return (
    <div className="overflow-hidden py-6 bg-[#020817]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
        <span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">
          Powered by industry-leading technologies
        </span>
      </h2>
      <div className="relative w-full">
        <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]"
            >
              {/* Force all icons to white except GoHighLevel */}
              {logo.name === "GoHighLevel"
                ? logo.icon
                : (
                  // Clone and override color for react-icons
                  <span className="text-white">{logo.icon}</span>
                )
              }
              <span className="mt-2 text-xs sm:text-sm text-white">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .animate-marquee > div {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
}