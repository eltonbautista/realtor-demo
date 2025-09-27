"use client";
import { useRef, useState, useEffect } from "react";
import { Mail, Calendar, Play, MapPin } from "lucide-react";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import FormButton from "@/components/layout/FormButton";

const TRAIL_LENGTH = 20;

export default function HomeCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  // Update trail on mouse move
  useEffect(() => {
    if (!hovered) {
      setTrail([]);
      return;
    }
    setTrail((prev) => {
      const next = [...prev, mouse];

      if (next.length > TRAIL_LENGTH) {
        next.shift();
      }
      
      return next;
    });
  }, [mouse, hovered]);

  // Mouse move handler
  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <section className="w-full bg-[#F2F0EF] py-16 px-6">
      <RevealOnScroll>
        <div
          ref={cardRef}
          className="relative max-w-7xl mx-auto bg-gradient-to-br from-[#101c3a] via-[#181e3a] to-[#181e3a] rounded-2xl shadow-xl px-6 sm:px-12 py-14 flex flex-col items-center text-center border border-[#232736] overflow-hidden cursor-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Spark Cursor & Trail */}
          {hovered && (
            <>
              {/* Trail */}
              {trail.map((pos, i) => (
                <div
                  key={i}
                  className="pointer-events-none"
                  style={{
                    position: "absolute",
                    left: pos.x - 8,
                    top: pos.y - 8,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, #60a5fa 0%, #a78bfa 80%, transparent 100%)`,
                    opacity: (i + 1) / trail.length * 0.5,
                    filter: "blur(2px)",
                    zIndex: 50,
                  }}
                />
              ))}
              {/* Spark */}
              <div
                className="pointer-events-none"
                style={{
                  position: "absolute",
                  left: mouse.x - 10,
                  top: mouse.y - 10,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #fff 0%, #60a5fa 60%, #a78bfa 100%, transparent 100%)",
                  boxShadow: "0 0 24px 8px #a78bfa, 0 0 8px 2px #60a5fa",
                  zIndex: 60,
                  pointerEvents: "none",
                }}
              />
            </>
          )}

          {/* --- Your CTA Content --- */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight heading-font">
            Turn Every Website Visitor <br/> Into a
            <br />
            <span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">
              Potential Client
            </span>
          </h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
            Get the professional website system that builds instant credibility, showcases your expertise, and <span className="font-bold">converts browsers into your next commission check</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
            <FormButton buttonText="Book a Demo" />
            {/* <a
              href="/book"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-black/80 hover:bg-black text-white font-bold text-lg shadow transition border border-gray-700 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Call
            </a> */}
          </div>
          <div className="text-gray-400 text-base mb-2 text-white font-semibold italic">99% of the time a single qualified client pays for your website.</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-300 text-base">
            <a
              href="mailto:solutions@realtorsitespro.ca"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="w-4 h-4" />
              solutions@realtorsitespro.ca
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Alberta, Canada
            </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}