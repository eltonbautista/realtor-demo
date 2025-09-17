// Footer.tsx

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-10 pb-4 border border-[#4a7c6a]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row w-full border-b border-[#4a7c6a]">
          {/* Left: Brand & Services */}
          <div className="md:w-[40%] w-full border-r border-[#4a7c6a] p-6 flex flex-col gap-3">
            <h3 className="uppercase text-lg font-bold mb-2 tracking-wide heading-font">INNOVATE</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:underline text-base">Home</Link></li>
              <li><Link href="/demo" className="hover:underline text-base">Demo</Link></li>
              <li><Link href="/internal" className="hover:underline text-base">Description Generator</Link></li>
            </ul>
            {/* <h3 className="uppercase text-base font-bold mt-6 mb-2 tracking-wide">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Brand Voice & Editorial Strategy</a></li>
              <li><a href="#" className="hover:underline">KOL & Influencer Activation</a></li>
              <li><a href="#" className="hover:underline">Community Growth & On-chain Campaigns</a></li>
              <li><a href="#" className="hover:underline">Public Relations</a></li>
            </ul> */}
          </div>

          {/* Center: Subscribe */}
          <div className="md:w-[40%] w-full border-r border-[#4a7c6a] p-6 flex flex-col gap-3">
            <h3 className="uppercase text-lg font-bold mb-2 tracking-wide heading-font">RealtorSitesPro</h3>
            <p className="text-base mb-2">Intelligent Websites That Pay for Themselves</p>
            {/* <form className="flex w-full mb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full bg-[#020817] text-white border-none focus:outline-none focus:ring-2 focus:ring-white text-base"
                style={{ borderRadius: 0 }}
              />
              <Button
                className="px-6 py-2 text-base font-semibold bg-white text-[#020817] hover:bg-white/80 transition-all duration-200 shadow-none border-none"
                style={{ borderRadius: 0 }}
                size="lg"
              >
                Subscribe
              </Button>
            </form> */}
            {/* <p className="text-xs text-white/80">By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a> and provide consent to receive updates from our company.</p> */}
          </div>

          {/* Right: Social Links */}
          <div className="md:w-[20%] w-full p-6 flex flex-col gap-3 items-end md:items-start">
            <h3 className="uppercase text-lg font-bold mb-2 tracking-wide heading-font">Social</h3>
            <ul className="flex flex-col gap-2 w-full">
              <li><a href="#" className="flex items-center gap-2 hover:underline">Facebook <span className="ml-auto">↗</span></a></li>
              <li><a href="#" className="flex items-center gap-2 hover:underline">X <span className="ml-auto">↗</span></a></li>
              <li><a href="#" className="flex items-center gap-2 hover:underline">LinkedIn <span className="ml-auto">↗</span></a></li>
              <li><a href="#" className="flex items-center gap-2 hover:underline">Instagram <span className="ml-auto">↗</span></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Email & Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-[#4a7c6a]">
          <div className="py-3 px-2 text-xs md:text-sm border-b border-[#4a7c6a] md:border-b-0 grid grid-flow-col gap-2 justify-start">
            <a href="mailto:solutions@realtorsitespro.ca" className="hover:underline">SOLUTIONS@REALTORSITESPRO.CA</a>
            <span className="ml-auto">↗</span>
          </div>
          {/* <div className="py-3 px-2 text-xs md:text-sm flex items-center justify-center border-b border-[#4a7c6a] md:border-b-0">
            <a href="#" className="hover:underline">FACEBOOK</a>
            <span className="ml-auto">↗</span>
          </div>
          <div className="py-3 px-2 text-xs md:text-sm flex items-center justify-end">
            <a href="#" className="hover:underline">LINKEDIN</a>
            <span className="ml-auto">↗</span>
          </div> */}
        </div>

        {/* Copyright Row */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
          <div>© 2025 RealtorSitesPro. All rights reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
